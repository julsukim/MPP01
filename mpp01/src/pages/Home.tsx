import React, { useState } from 'react';
import Button from "../components/Button";
import { ThemeProvider } from "styled-components";
import Dialog from "../components/Dialog";

const Home = () => {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
  };
  const onCancel = () => {
    setDialog(false);
  };
  return (
    <div>
      <h1>Home</h1>
      <ThemeProvider
        theme={{
          palette: {
            blue: '#228be6',
            gray: '#495057',
            pink: '#f06595'
          }
        }}
      >
        <Button>confirm</Button>
        <Button color="gray" size="small">confirm</Button>
        <Button color="pink" size="large" $outline onClick={onClick}>confirm</Button>
        <Dialog
          title="Hello"
          confirmText="confirm"
          cancelText="cancel"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >Hi there ~</Dialog>
      </ThemeProvider>
    </div>
  );
};

export default Home;