import React, { useState } from 'react';
import styled from "styled-components";
import {Navigate, useNavigate} from "react-router-dom";
import { useAuth } from "../AuthContext";

const LoginFormBlock = styled.div`
  display: flex;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 160px;
      height: 24px;
      margin-bottom: 12px;
    }
    button {
      width: 80px;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: '',
    password: ''
  });

  const { isLoggedIn, login, logout, username } = useAuth();

  const { name, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  };
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === 'user' && password === '1234') {
      login(name);
      navigate('/');
    } else {
      alert('wrong!');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginFormBlock>
        <form onSubmit={onSubmit}>
          <input name='name' placeholder='username' onChange={onChange} value={name} />
          <input name='password' placeholder='password' type='password' onChange={onChange} value={password} />
          <button>confirm</button>
        </form>
      </LoginFormBlock>
    </div>
  );
};

export default Login;