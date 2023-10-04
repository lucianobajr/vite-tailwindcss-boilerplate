import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, NotFound } from "../pages";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
