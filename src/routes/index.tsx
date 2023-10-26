import React from "react";
//import { useAuth } from "../contexts/AuthContext";

import AppRoutes from "./app.routes";
//import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {
  //const { user } = useAuth();
  //<>{user.user ? <AppRoutes /> : <AuthRoutes />}</>;

  return <AppRoutes />;
};

export default Routes;
