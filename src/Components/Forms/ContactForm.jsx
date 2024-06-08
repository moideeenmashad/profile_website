import React, { useState } from "react";
import axios from "axios";
import Alert from "@/Components/Alert/Alert";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState(""); // "success" or "error"
  const [btnType, setBtnType] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Invalid name format";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Show the modal with error messages
      setModalMessage("invalid inputs please try again");
      setModalType("error");
      setBtnType("Retry");
      setModalVisible(true);
    } else {
      setErrors({});
      axios
        .post("https://formspree.io/f/xleqyvgv", formData)
        .then((response) => {
          if (response.status === 200) {
            setModalMessage(
              "Thank you for contacting us. We will be in touch with you very soon."
            );
            setModalType("success");
            setModalVisible(true);
            setBtnType("Ok");
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          } else {
            setModalMessage("An error occurred, please try again.");
            setBtnType("Retry");
            setModalType("error");
            setModalVisible(true);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          if (!error.response) {
            setModalMessage("Check your internet connection.");
          } else {
            setModalMessage("An error occurred, please try again.");
          }
          setModalType("error");
          setBtnType("Retry");
          setModalVisible(true);
        });
    }
  };

  const handleCloseModal = () => setModalVisible(false);

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="row g-3 mb-16">
            <div className="col-12">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.name ? "is-invalid invalid-input" : "valid-input"
                }`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="invalid-feedback">{errors.name}</small>
              )}
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${
                  errors.email ? "is-invalid invalid-input" : "valid-input"
                }`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="invalid-feedback">{errors.email}</small>
              )}
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn_primary">
            Submit
          </button>
        </form>
      </div>
      <Alert
        show={modalVisible}
        handleClose={handleCloseModal}
        message={modalMessage}
        type={modalType}
        statusIcon={modalType === "error" ? <MdError /> : <FaCircleCheck />}
        actionBtn={btnType}
      />
    </>
  );
};

export default ContactForm;
