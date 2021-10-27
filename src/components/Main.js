import React, { useEffect } from "react";
import editProfilePen from "../images/pen.svg";
import plusSign from "../images/plussign.svg";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api
      .loadUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__image-container">
            <img
              className="profile__image"
              src={userAvatar}
              alt="profile image"
              onClick={props.onEditAvatarClick}
            />
            <img
              src="default"
              alt="editImagePen"
              className="profile__image-pen"
              id="pen"
            />
          </div>
          <div className="profile__text">
            <div className="profile__title">
              <h1 className="profile__username" id="fullName">
                {userName}
              </h1>
              <button
                type="button"
                id="openProfile"
                className="profile__edit"
                onClick={props.onEditProfileClick}
              >
                <img
                  className="profile__pen"
                  src={editProfilePen}
                  id="profilePen"
                  alt="pen"
                />
              </button>
            </div>
            <p className="profile__subtitle" id="description">
              {userDescription}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="profile__button"
          id="addNewContentButton"
          onClick={props.onAddPlaceClick}
        >
          <img
            className="profile__plus"
            src={plusSign}
            id="plusSign"
            alt="plus sign"
          />
        </button>
      </section>

      <section className="elements">
        <Card card={cards} fetchData={props.getCardData} />
      </section>
    </main>
  );
}

export default Main;
