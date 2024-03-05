import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import Layout from "./Layout";
import {AuthProvider} from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/articles' element={<Articles />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;