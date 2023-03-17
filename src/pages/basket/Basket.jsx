import "./basket.css";
import CardBasket from "../../Componets/Elements/cardBasket/cardBasket";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { remove } from '../../store/productsSlice'
import {v4 as uuidv4 } from "uuid";

function Basket() {
  const {productsArray} = useSelector(state => state.productsReducer)//Массив карточек из store
  const dispatch = useDispatch()
  const navigate = useNavigate() //Хук для навигации

  return (
    <div className="wrapper-basket">
      <div className="container__basket">
        <header className="header__content">
          <img 
            src="/images/6.png" 
            alt="" 
            className="basket-header__icon" 
            onClick={() => navigate("/products")}//Переход на страницу products
            />
          <h1 className="basket__title">КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
        </header>

        <main className="main-basket">
          {productsArray.length === 0 ? <div className="basket__title">Корзина пуста</div> : 
           productsArray.map(item => {
            return (
              <CardBasket
              key={uuidv4()} //Генерирует случайный id, так как при использовании id из Products возникают ошибки с удалением из корзины
              urlCard={item.url}
              text={item.title}
              cardPrice={item.price}
              urlIcon='/images/7.png'
              action={() => dispatch(remove(productsArray.indexOf(item)))}/>
            )})}
          {/*<CardBasket
          urlCard='/images/8.png'
          text='Устрицы по рокфеллеровски'
          cardPrice='2 700 ₽'
          urlIcon='/images/7.png'
          />
          <CardBasket
          urlCard='/images/9.png'
          text='Креветки по-королевски
          в лимонном соке'
          cardPrice='1 820 ₽'
          urlIcon='/images/7.png'
          />
          <CardBasket
          urlCard='/images/10.png'
          text='Свиные ребрышки на гриле с зеленью'
          cardPrice='1 600 ₽'
          urlIcon='/images/7.png'
            />*/}
        </main>
      </div>
      <div className="footer__container">
      <div className="footer__border">
      <footer className="footer">
          <div className="content">
          <p className="footer__text">ЗАКАЗ НА СУММУ:</p>
          <p className="footer__price">
            {productsArray.reduce((accumulator, current) => accumulator + parseInt(current.price), 0)/*Проходит по массиву в store и складывает все цены*/}
            ₽</p>
          </div>
          <button className="footer__btn">Оформить заказ</button>
        </footer>
      </div>
      </div>
     
    </div>
  );
};

export default Basket;