function InitalCards(props) {
  return props.card.map((card, id) => (
    <article
      className="card"
      key={id}
      onClick={() => {
        props.fetchData(card);
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
        src={card.link}
        alt={card.name}
        className="card__image"
      />
      <div className="card__caption">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__group">
          <button
            className="card__like-btn"
            type="button"
            aria-label="like button"
          ></button>
          <p className="card__like-numbers">{card.likes.length}</p>
        </div>
      </div>
    </article>
  ));
}
export default InitalCards;
