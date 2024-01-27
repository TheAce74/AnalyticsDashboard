import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import avatar from "../../assets/avatar.png";
import { useRef, useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { emailRegex } from "../../utils/emailRegex";
import { EMAIL, USER_NAME } from "../../utils/constants";
import { useAlert } from "../../hooks/useAlert";
import { useModal } from "../../hooks/useModal";

function Settings() {
  const { setTitle } = useAppContext();
  const [imageSrc, setImageSrc] = useState(avatar);
  const [openModal, setOpenModal] = useState(false);
  const imageRef = useRef(null);
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState(USER_NAME);
  const [email, setEmail] = useState(EMAIL);
  const { showAlert } = useAlert();
  const modalRef = useRef({
    title: null,
    message: null,
    buttonText1: null,
    buttonText2: null,
    callback: null,
  });

  const modal = useModal(openModal, setOpenModal, modalRef.current);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!imageRef.current.value) {
      showAlert("Select an image", { variant: "error" });
      return;
    }
    showAlert("Uploaded successfully", { variant: "success" });
  };

  const validFileType = (file) => {
    const fileTypes = ["image/png", "image/jpeg", "image/jpg"];
    return fileTypes.includes(file.type);
  };

  const returnFileSize = (file) => {
    return file.size;
  };

  const handleChange = () => {
    const image = imageRef.current.files[0];
    if (validFileType(image) && returnFileSize(image) <= 3145728) {
      setImageSrc(URL.createObjectURL(image));
    } else if (!validFileType(image)) {
      showAlert("Invalid File Type", { variant: "error" });
      imageRef.current.value = "";
    } else {
      showAlert("Image size must be at most 3MB", { variant: "error" });
      imageRef.current.value = "";
    }
  };

  const showModal = () => {
    modalRef.current = {
      title: "Upload Photo",
      message: (
        <input
          type="file"
          style={{
            marginBlock: ".8em",
          }}
          ref={imageRef}
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleChange}
        />
      ),
      buttonText1: "Close",
      buttonText2: "Upload",
      callback: handleUpload,
    };
    setOpenModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (USER_NAME === username && EMAIL === email) {
      showAlert("You have made no changes");
      return;
    }
    if (!emailRegex.test(email)) {
      showAlert("Please enter a correct email address", { variant: "error" });
      return;
    }
    showAlert("Your details have been updated successfully", {
      variant: "success",
    });
    setEdit(false);
  };

  const setter = (callback) => (e) => {
    const {
      target: { value },
    } = e;
    callback(value);
  };

  useLayoutEffect(() => {
    setTitle("Settings");
  }, [setTitle]);

  return (
    <motion.section
      className="settings"
      key="settings"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="top">
        <div className="user">
          <span aria-hidden="true">
            <div className="image">
              <img src={imageSrc} alt="" />
            </div>
            <button onClick={showModal}>
              <BiSolidPencil />
            </button>
          </span>
        </div>
        <div>
          <h2>{USER_NAME}</h2>
          <p>{EMAIL}</p>
        </div>
      </div>
      <button className="edit" disabled={edit} onClick={() => setEdit(true)}>
        <BiSolidPencil />
        <span>Edit Information</span>
      </button>
      <form className="personal" onSubmit={handleSubmit}>
        <label htmlFor="username">First name</label>
        <input
          type="text"
          required={true}
          value={username}
          onChange={setter(setUsername)}
          id="username"
          disabled={!edit}
          className="form-input"
        />
        <label htmlFor="email">Email address</label>
        <input
          type="text"
          required={true}
          value={email}
          onChange={setter(setEmail)}
          id="email"
          disabled={!edit}
          className="form-input"
        />
        <button className={!edit ? "hidden" : ""} type="submit">
          <span>Save Changes</span>
        </button>
      </form>
      {modal}
    </motion.section>
  );
}

export default Settings;
