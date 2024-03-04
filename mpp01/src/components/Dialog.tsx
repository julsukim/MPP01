import React, {useEffect, useState} from 'react';
import styled, { css, keyframes } from 'styled-components';
import Button from './Button';

interface DialogStyleProps {
  disappear: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  } to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  } to {
    transform: translateY(200px);
  }
`;

const DarkBackground = styled.div<DialogStyleProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  
  ${props =>
    props.disappear &&
    css`
      animation-name: ${fadeOut}
    `}
`;

const DialogBlock = styled.div<DialogStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  h3 {
    margin: 0;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${props =>
      props.disappear &&
      css`
      animation-name: ${slideDown}
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

export interface DialogProps {
  title: string,
  children: React.ReactNode,
  confirmText: string,
  cancelText: string,
  onConfirm: () => void,
  onCancel: () => void,
  visible: boolean
}

const Dialog: React.FC<DialogProps> = ({
  title,
  children,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  visible
}) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 200);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        {children}
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>{cancelText}</ShortMarginButton>
          <ShortMarginButton color="blue" onClick={onConfirm}>{confirmText}</ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
};

export default Dialog;