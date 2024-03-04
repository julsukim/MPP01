import React from 'react';
import {useAuth} from "../AuthContext";
import {Navigate} from "react-router-dom";

const Articles = () => {
  const { isLoggedIn, login, logout } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <h1>Articles</h1>
    </div>
  );
};

export default Articles;