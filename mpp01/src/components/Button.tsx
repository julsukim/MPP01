import React, {ButtonHTMLAttributes} from 'react';
import styled, { css } from 'styled-components';
import {backgrounds, darken, lighten} from 'polished';

interface StyledButtonProps {
  color: string,
  size: string,
  $outline: boolean
}

const colorStyles = css<StyledButtonProps>`
  ${({ theme, color, $outline }) => {
    const selected = theme.palette[color || ''];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${$outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes: {[key:string]:{height:string; fontSize:string}} = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  },
}

const sizeStyles = css<StyledButtonProps>`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const StyledButton = styled.button<StyledButtonProps>`
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  ${sizeStyles}
  
  ${colorStyles}

  & + & {
    margin-left: 1rem;
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string,
  size?: string,
  $outline?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, color="blue", size="medium", $outline=false, ...rest}) => {
  console.log(children, color, size, $outline)
  return (
    <StyledButton color={color} size={size} $outline={$outline} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;