// import "./modalpopup.css";

const Modal = ({ id, onClose, header, body, footer }) => {
  return (
    <div className="modal-wrapper" id={id || "Modal"}>
      <div className="modal-content">
        <div className="header">
          <span onClick={onClose} className="close-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"} </h2>
        </div>
        <div className="body">{body ? body : "Body"}</div>
        <div className="footer">
          <h2>{footer ? footer : "Footer"}</h2>
        </div>
      </div>
    </div>
  );
};

export default Modal;
