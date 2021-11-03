import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import {
  CurrentUserContext,
  CardsContext,
} from "../contexts/CurrentUserContext";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [imagePen, setImagePen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .loadUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAddPlaceSubmit(name, link) {
    api
      .addNewCard(name, link)
      .then((newCard) => setCards([newCard, ...cards]))
      .then(() => closeAllPopups())
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    const deleteId = card._id;
    const newCardArr = [];
    api
      .deleteCard(card._id)
      .then(() => {
        cards.filter((card) => {
          if (!(card._id == deleteId)) {
            newCardArr.push(card);
          }
        });
      })
      .then(() => {
        setCards(newCardArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleMouseEnter() {
    setImagePen(true);
  }

  function handleMouseLeave() {
    setImagePen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(name, about) {
    api
      .updateUserInfo(name, about)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(avatar) {
    api
      .updateProfilePicture(avatar)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .then(() => {
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) =>
        state
          .map((c) => (c._id === card._id ? newCard : c))
          .catch((err) => {
            console.log(err);
          })
      );
    });
  }

  return (
    <div className="App">
      <CardsContext.Provider value={cards}>
        <CurrentUserContext.Provider value={currentUser}>
          <div className="root__content">
            <Header />
            <Main
              onEditAvatarClick={handleEditAvatarClick}
              onAddPlaceClick={handleAddPlaceClick}
              onEditProfileClick={handleEditProfileClick}
              getCardData={handleCardClick}
              onProfileOver={handleMouseEnter}
              onProfileLeave={handleMouseLeave}
              isOpen={imagePen}
              cards={cards}
              setCards={setCards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
            <Footer />
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />
            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlaceSubmit={handleAddPlaceSubmit}
            />

            <PopupWithForm
              name="deleteCard"
              title="Are you sure?"
              onClose={closeAllPopups}
              buttonText="Yes"
            />

            <ImagePopup data={selectedCard} onClose={closeAllPopups} />
          </div>
        </CurrentUserContext.Provider>
      </CardsContext.Provider>
    </div>
  );
}

export default App;
