import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, language }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
        <h1>{language === "español" ? "Instrucciones" : "Instructions"}</h1>
        </div>
        <div className="body">
          <p>{language === "español" ? "Estas son las instrucciones" : "These are the instructions"}</p>
        </div>

      </div>
    </div>
  );
}

export default Modal;