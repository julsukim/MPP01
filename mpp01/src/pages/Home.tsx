import React from 'react';
import Button from "../components/Button";
import { ThemeProvider } from "styled-components";

const Home = () => {
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
        <Button color="pink" size="large" $outline>confirm</Button>
      </ThemeProvider>
    </div>
  );
};

export default Home;