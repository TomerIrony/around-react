import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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
  return (
    <div className="App">
      <div className="root__content">
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditProfileClick={handleEditProfileClick}
          getCardData={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          title="Edit Profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Save"
        >
          <input
            className="form__text-input form__input"
            type="text"
            name="Full Name"
            id="userInputfullName"
            placeholder="Full Name"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="form__validation userInputfullName-error"></span>

          <input
            className="form__text-input form__input"
            type="text"
            name="Description"
            id="userInputDescription"
            placeholder="Description"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="form__validation userInputDescription-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="editImage"
          title="Change profile picture"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Save"
        >
          <input
            className="form__text-input form__input"
            type="url"
            name="Profile Image Url"
            placeholder="Image URL"
            id="profileImageInput"
            required
          />
          <span className="form__validation profileImageInput-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="addCard"
          title="New Place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Save"
        >
          <input
            className="form__text-input form__input"
            type="text"
            name="title"
            placeholder="title"
            id="cardNameInput"
            required
            minLength="2"
          />
          <span className="form__validation cardNameInput-error"></span>
          <input
            className="form__text-input form__input"
            type="url"
            name="link"
            placeholder="Image URL"
            id="imageInput"
            required
          />
          <span className="form__validation imageInput-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="deleteCard"
          title="Are you sure?"
          onClose={closeAllPopups}
          buttonText="Yes"
        />

        <ImagePopup data={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
