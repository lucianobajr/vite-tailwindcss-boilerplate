import React from "react";

import NotFoundImg from "../../assets/not-found.svg";

const NotFound: React.FC = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <img src={NotFoundImg} alt="not-found image" />
    </div>
  );
};

export default NotFound;
