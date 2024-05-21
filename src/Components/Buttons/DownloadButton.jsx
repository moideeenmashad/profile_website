import React from 'react'
import './Button.css'
// import cv from "../../Assets/document/"

const DownloadButton = () => {
    const getCV = () => {
        const link = document.createElement('a');
        link.href = ""; //add cv here
        link.download = 'Moideen_Mashad_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <>
            <button className="btn_primary" onClick={getCV}>Download CV</button>
        </>
    )
}

export default DownloadButton