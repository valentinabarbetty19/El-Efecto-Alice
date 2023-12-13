import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, language }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer" style={{ width: "70%", height: "70%" }}>
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>{language === "español" ? "Instrucciones" : "Instructions"}</h1>
        </div>
        <div className="body">
          {/* Mostrar el video al final del modal */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Xj8zY6kGCs4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Modal;
