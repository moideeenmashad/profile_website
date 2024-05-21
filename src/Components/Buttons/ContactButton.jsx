import React from 'react'
import "./Button.css"

const ContactButton = () => {
    const goToEmail = () => {
        window.location.href = 'mailto:moideenmashad@gmail.com';
    };
    return (
        <>
            <button className="btn_outline_primary" onClick={goToEmail}>Contact</button>
        </>
    )
}

export default ContactButton