import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#1a1a1a"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

export default Loader;
