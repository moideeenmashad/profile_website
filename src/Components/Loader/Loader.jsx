import React from "react";
import { TailSpin } from "react-loader-spinner";
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        ariaLabel="tail-spin-loading"
        radius="1"
        color="#1a1a1a"
        wrapperStyle={{}}
        wrapperClass=""
        className="loader"
      />
    </div>
  );
};

export default Loader;
