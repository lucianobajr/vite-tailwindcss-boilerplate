import React from "react";

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="w-full h-24 bg-main">
        <div className="w-full h-full container py-6 flex items-center justify-between">
          <button className="h-16 rounded-md bg-red-500 hover:bg-red-600 py-6 px-14 text-white uppercase transition-colors duration-300">Logo</button>
          <h1>Text</h1>
        </div>

      </header>
      <main className="w-full flex-1">
        <div className="w-full h-full container py-6 bg-cyan-200 flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-gray-600"></div>
        </div>
      </main>

    </div>
  );
};

export default Home;
