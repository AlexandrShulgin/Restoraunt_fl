import "./card.css";

function Card({url, urlOne, title, description, price, weight, action}) {

return(
  <div className="card">
    <img src={url} alt="" className="card__preview" />
    <h3 className="card__title">{title}</h3>
    <p className="card__description">{description}</p>

    <div className="card__bottom">
      <img 
        src={urlOne} 
        alt="" 
        className="adding" 
        onClick={action}/>
      
      <span className="price">
        {price} ₽ / {weight} г
      </span>
    </div>
  </div>
);
};

export default Card;