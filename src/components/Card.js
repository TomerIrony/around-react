function Card(props) {
  return (
    <article
      className="card"
      onClick={() => {
        props.fetchData(props.card);
      }}
    >
      <button
        type="button"
        aria-label="close card"
        className="card__close"
        id="cardClose"
      ></button>
      <img
        id="cardImage"
        src={props.card.link}
        alt={props.card.name}
        className="card__image"
      />
      <div className="card__caption">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__group">
          <button
            className="card__like-btn"
            type="button"
            aria-label="like button"
          ></button>
          <p className="card__like-numbers">{}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;
