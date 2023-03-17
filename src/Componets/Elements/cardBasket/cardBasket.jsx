import "./cardBasket.css";

function cardBasket({urlCard, text, cardPrice, urlIcon, action}) {
  return (
    <div className="card-basket">
      <img src={urlCard} alt="" className="card-basket__img" />
      <div className="card-basket__menu">{text}</div>

      <div className="basket-price">
      <span className="card-basket__price">{cardPrice}</span>
      <img 
        src={urlIcon} 
        alt=""
        className="card-basket__icon"
        onClick={action} />
      </div>
      
    </div>
    
  );
};

export default cardBasket;