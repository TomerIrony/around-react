import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, openAvatarEdit] = React.useState(false);
  const [isAddPlacePopupOpen, openAddPlace] = React.useState(false);
  const [isEditProfilePopupOpen, openProfileEdit] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    openAvatarEdit(true);
  }
  function handleEditProfileClick() {
    openProfileEdit(true);
  }
  function handleAddPlaceClick() {
    openAddPlace(true);
  }

  function closeAllPopups() {
    openAvatarEdit(false);
    openProfileEdit(false);
    openAddPlace(false);
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
        />
        <PopupWithForm
          name="editImage"
          title="Change profile picture"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="addCard"
          title="New Place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />
        <PopupWithForm
          name="deleteCard"
          title="Are you sure?"
          onClose={closeAllPopups}
        />

        <ImagePopup data={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
