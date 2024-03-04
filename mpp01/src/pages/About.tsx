import React from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const About = () => {
  const { isLoggedIn, login, logout } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;