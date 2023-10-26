import React from "react";

import QRcode from "../../assets/out.png";

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-200">
      <img src={QRcode} className="w-auto h-auto" alt="" />
      <h1 className="text-black font-bold text-3xl mt-9">
        ME ESCANEIE 🙏🏼🙄🤏🏼👆🏼👆🏼
      </h1>
    </div>
  );
};

export default Home;
