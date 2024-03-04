import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useAuth } from "../AuthContext";
import LoginDialog from "../components/LoginDialog";

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

const StyledInput = styled.input`
  text-decoration: none;
  background: #eeeeee;
  width: 60%;
  border-radius: 8px;
  height: 2rem;
  outline: none;
  border: none;
  margin-bottom: 4px;
  padding-left: 8px;
`;

const NavBar = () => {
  const { isLoggedIn, login, logout, username } = useAuth();
  const [dialog, setDialog] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    password: ''
  });
  const { name, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  };

  const onSubmit = () => {
    if (name === 'user' && password === '1234') {
      login(name);
      setDialog(false);
      setInputs({
        name: '',
        password: ''
      })
    } else {
      alert('wrong!');
    }
  };

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
    <>
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
          <a onClick={onClick}>Login</a>
        )}
      </NavBarBlock>
      <ThemeProvider
        theme={{
          palette: {
            blue: '#228be6',
            gray: '#495057',
            pink: '#f06595'
          }
        }}
      >
        <LoginDialog onConfirm={onSubmit} onCancel={onCancel} visible={dialog}>
          <StyledInput name='name' placeholder='username' onChange={onChange} value={name}/>
          <StyledInput name='password' placeholder='password' type='password' onChange={onChange} value={password}/>
        </LoginDialog>
      </ThemeProvider>
    </>
  );
};

export default NavBar;