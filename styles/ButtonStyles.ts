import styled from 'styled-components';

type IButtonProps = {
  width?: string;
  padding?: string;
};

export const ButtonComponent = styled.button<IButtonProps>`
  transition-timing-function: ease-in-out;
  position: relative;
  z-index: 30;
  box-sizing: border-box;
  display: inline-flex;
  border: none;

  width: ${(props) => (props.width ? props.width : 'auto')};
  padding: ${(props) => (props.padding ? props.padding : '17px 45px')};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 4px;
  background: linear-gradient(to right, #ff69b4, #9b59b6);
  color: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  .before-hover {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 8px;
    transform: rotate(45deg) translateX(1px);
    background-color: white;
    opacity: 0.1;
    transition: all 0.3s ease;
  }

  .after-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 20px;
    transform: rotate(-45deg) translateX(1px);
    background-color: white;
    opacity: 0.1;
    transition: all 0.3s ease;
  }

  &:hover .before-hover {
    transform: rotate(45deg) translateX(0);
  }

  &:hover .after-hover {
    transform: rotate(-45deg) translateX(0);
  }

  .icon {
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 8px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
