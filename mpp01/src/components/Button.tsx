import React, {ButtonHTMLAttributes} from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  height: 2.5rem;
  font-size: 1rem;

  background: #b8b8b8;

  &:hover {
    background: #e5e5e5;
  }

  &:active {
    background: #e1e1e1;
  }

  & + & {
    margin-left: 1rem;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest}) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;