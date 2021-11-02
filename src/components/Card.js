import React from "react";

function Card(props) {
  const isOwn = props.card.owner._id === props.currentUserId;
  const isLiked = props.card.likes.some((i) => i._id === props.currentUserId);
  const cardLikeButtonClassName = `${
    isLiked ? "card__like-active" : "card__like-btn"
  }`;
  const cardDeleteButtonClassName = `${
    isOwn ? "card__close" : "card__close_hide"
  }`;
  return (
    <article className="card">
      <button
        type="button"
        aria-label="close card"
        className={cardDeleteButtonClassName}
        id="cardClose"
        onClick={() => props.onCardDelete(props.card)}
      ></button>
      <img
        onClick={() => {
          props.fetchData(props.card);
        }}
        id="cardImage"
        src={props.card.link}
        alt={props.card.name}
        className="card__image"
      />
      <div className="card__caption">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__group">
          <button
            className={cardLikeButtonClassName}
            onClick={() => props.onCardLike(props.card)}
            type="button"
            aria-label="like button"
          ></button>
          <p className="card__like-numbers">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}
export default Card;