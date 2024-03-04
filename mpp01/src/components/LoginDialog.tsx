import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Dialog, {DialogProps} from "./Dialog";

const LoginDialogBlock = styled(Dialog)`
  input {
    text-decoration: none;
    width: 100%;
    height: 4rem;
  }
`;

interface LoginDialogProps {
  children: React.ReactNode,
  onConfirm: () => void,
  onCancel: () => void,
  visible: boolean
}

const LoginDialog: React.FC<LoginDialogProps> = ({
  children,
  onConfirm,
  onCancel,
  visible
}) => {
  return (
    <LoginDialogBlock
      title="Login"
      confirmText="confirm"
      cancelText="cancel"
      onConfirm={onConfirm}
      onCancel={onCancel}
      visible={visible}
    >
      {children}
    </LoginDialogBlock>
  );
};

export default LoginDialog;