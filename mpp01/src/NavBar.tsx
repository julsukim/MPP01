import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "./AuthContext";

const NavBarBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 16px;
  background: #efefef;

  a {
    text-decoration: none;
    margin-right: 32px;
    color: #696767;
    transition: 0.3s;
  }

  a:hover {
    color: #000000;
  }
`;

const NavBar = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <NavBarBlock>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
      </div>
      {isLoggedIn ? (
        <button onClick={logout}>logout</button>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </NavBarBlock>
  );
};

export default NavBar;