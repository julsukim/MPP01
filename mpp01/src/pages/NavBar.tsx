import React from 'react';
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../AuthContext";

const NavBarBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 16px;
  background: #efefef;

  a {
    text-decoration: none;
    margin: 0 16px;
    color: #696767;
    transition: 0.3s;
    cursor: pointer;
  }

  a:hover {
    color: #000000;
  }
`;

const NavBar = () => {
  const { isLoggedIn, login, logout, username } = useAuth();

  return (
    <NavBarBlock>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articles">Articles</Link>
      </div>
      {isLoggedIn ? (
        <div>
          <span>Hi, {username}</span>
          <a onClick={logout}>Logout</a>
        </div>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </NavBarBlock>
  );
};

export default NavBar;