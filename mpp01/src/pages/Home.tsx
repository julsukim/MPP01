import React, { useState } from 'react';
import Button from "../components/Button";
import { ThemeProvider } from "styled-components";
import Dialog from "../components/Dialog";
import LoginDialog from "../components/LoginDialog";

const Home = () => {
  const [dialog, setDialog] = useState(false);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;