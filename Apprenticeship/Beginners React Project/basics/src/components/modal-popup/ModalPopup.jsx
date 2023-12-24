import { useState } from "react";
import Modal from "./Modal";
import "./modalpopup.css";

const ModalPopup = () => {
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(!popup);
  };

  function onClose() {
    setPopup(false);
  }

  return (
    <div>
      <h1>Modal Popup</h1>
      <button onClick={() => handlePopup()}>Open Modal</button>
      {popup && (
        <Modal
          onClose={onClose}
          header={"Advertisement"}
          body={"Listen to Heavy Metal Wing"}
          footer={"TripleS"}
        />
      )}
    </div>
  );
};

export default ModalPopup;
