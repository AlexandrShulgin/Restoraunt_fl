import "./products.css";
import Card from "../../Componets/Elements/Card";
import { products } from "../../Products.jsx";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from '../../store/productsSlice'
import { useState } from "react";
function Products() {
  const {productsArray} = useSelector(state => state.productsReducer)//Массив карточек из store
  const dispatch = useDispatch()
  const navigate = useNavigate() //Хук для навигации
  const [addButton, setAddButton] = useState(products.map(item => item.urlOne))

  function clickHandler(array, item) {
    //Если в корзине есть товар - удаляет, если нет - добавляет
    if (array.find(elem => elem.id === item.id) !== undefined) {
      dispatch(remove(item))
      setAddButton(prev => (prev[products.indexOf(item)] = '/images/4.png', [...prev]))//Меняет кнопку с - на +
    } else {
      dispatch(add(item))
      setAddButton(prev => (prev[products.indexOf(item)] = '/images/4.1.png', [...prev]))//Меняет кнопку с + на -
    }
  }

return(
<main className="main">
<div className="container">
  <header className="header">
  <h1 className="product">НАША ПРОДУКЦИЯ</h1>
  
  <div className="header__sum">
    {productsArray.length} товара <br />
    на сумму {productsArray.reduce((accumulator, current) => accumulator + parseInt(current.price), 0)/*Проходит по массиву в store и складывает все цены*/} ₽ 
  </div>
  <img 
    src="/images/5.png" 
    alt="basket-icon" 
    className="header__img" 
    onClick={() => navigate('/basket')} //Переход на страницу basket
    />
    <button className="header__button">Выйти</button>
  </header>
  <div className="product-list">
    {products.map(item => {
      return (
        <Card 
        key={item.id}
        url={item.url}
        urlOne={addButton[products.indexOf(item)]}
        title={item.title}
        description={item.description}
        price={item.price}
        weight={item.weight}
        action={() => clickHandler(productsArray, item)} //Добавляет и удаляет из store данные карточки 
    />
      );
    })};
    
  {/* <Card 
  url='/images/1.png'
  urlOne='/images/4.png'
  title='Устрицы по рокфеллеровски' 
  description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'
  price='2700'
  weight='500'
  /> */}

  {/* <Card 
  url='/images/2.png'
  urlOne='/images/4.png'
  title='Свиные ребрышки на гриле с зеленью' 
  description='Не следует, однако забывать, что реализация намеченных плановых'
  price='1 600'
  weight='750'
  />

  <Card 
  url='/images/3.png'
  urlOne='/images/4.png'
  title='Креветки по-королевски в лимонном соке' 
  description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'
  price='1820'
  weight='457'
  />

  <Card 
  url='/images/1.png'
  urlOne='/images/4.png'
  title='Устрицы по рокфеллеровски' 
  description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'
  price='2700'
  weight='500'
  />

<Card 
url='/images/1.png'
urlOne='/images/4.png'
title='Устрицы по рокфеллеровски' 
description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'
price='2700'
weight='500'
/>

  <Card 
  url='/images/2.png'
  urlOne='/images/4.png'
  title='Свиные ребрышки на гриле с зеленью' 
  description='Не следует, однако забывать, что реализация намеченных плановых'
  price='1 600'
  weight='750'
  />

  <Card 
  url='/images/3.png'
  urlOne='/images/4.png'
  title='Креветки по-королевски в лимонном соке' 
  description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу'
  price='1820'
  weight='457'
  />

<Card 
url='/images/1.png'
urlOne='/images/4.png'
title='Устрицы по рокфеллеровски' 
description='Значимость этих проблем настолько очевидна, что укрепление и развитие структуры'
price='2700'
weight='500'
/> */}
  </div>

</div>
</main>

);
};

export default Products;