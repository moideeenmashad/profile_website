import React from "react";
import "./Alert.css";

const Alert = ({ show, handleClose, message, statusIcon, type, actionBtn }) => {
  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden={!show}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal_header">
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-status-icon">
              <i className="status_icon">{statusIcon}</i>
            </div>
          <div className="modal_body p-12">
            <h3 className="text-center">
              {type === "success" ? "Success!" : "Something went wrong!"}
            </h3>
            <p className="message text-center">{message}</p>
          </div>
          <div className="d-flex justify-content-center p-12">
            <button type="button" className="btn_primary" onClick={handleClose}>
              <span>{actionBtn}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
