import React from "react";
import ContactForm from "@/Components/Forms/ContactForm";
import "./Main.css";

const Contactme = () => {
  return (
    <>
      <div className="contactme_bg" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <h6 className="sub_title">Let's Talk</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                ducimus quidem at dolore consequuntur ex neque architecto
                officiis consectetur atque ipsa exercitationem iusto, iure optio
                nam voluptate mollitia delectus. Veritatis!
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="card contact_card_bg">
                <div className="card-body">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
