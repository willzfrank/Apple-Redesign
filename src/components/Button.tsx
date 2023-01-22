import React from 'react';

import { ButtonComponent } from '@/styles/ButtonStyles';

type Props = {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  noIcon?: boolean;
};

function Button({ width, padding, onClick, noIcon, loading, title }: Props) {
  return (
    <ButtonComponent width={width} padding={padding} onClick={onClick}>
      <span className="before-hover"></span>
      <span className="after-hover"></span>
      {noIcon && (
        <div className="icon">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
      )}
      {loading ? (
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-text">Loading...</div>
        </div>
      ) : (
        title
      )}
    </ButtonComponent>
  );
}
export default Button;
