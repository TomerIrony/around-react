function PopupWithForm(props) {
  return (
    <div
      className={`popout ${props.isOpen ? `popout_opened` : ""}`}
      id={props.name}
    >
      <div className="popout__container">
        <button
          type="button"
          aria-label="close"
          className="popout__close-btn"
          id="closeProfileButton"
          onClick={props.onClose}
        ></button>
        <form
          action="/"
          name={props.name}
          className="form"
          id={`${props.name}Form`}
        >
          <fieldset className="form__fieldset">
            <legend>
              <h2 className="form__heading">{props.title}</h2>
            </legend>
            {props.name === "profile" ? (
              <>
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
              </>
            ) : (
              ""
            )}

            {props.name === "editImage" ? (
              <>
                <input
                  className="form__text-input form__input"
                  type="url"
                  name="Profile Image Url"
                  placeholder="Image URL"
                  id="profileImageInput"
                  required
                />
                <span className="form__validation profileImageInput-error"></span>
              </>
            ) : (
              ""
            )}

            {props.name === "addCard" ? (
              <>
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
              </>
            ) : (
              ""
            )}

            <button
              type="submit"
              className="form__submit-btn form__submit"
              id="saveInputProfileButton"
            >
              Save
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
