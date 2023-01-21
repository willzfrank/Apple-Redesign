import styled from 'styled-components';

export const LandingContainer = styled.section`
  h1 {
    margin-top: 12px;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0.025em;
    /* h1 styling */

    @media (min-width: 768px) and (max-width: 1024px) {
      font-size: 60px;
    }
    /* h1 for tablets  styling */

    @media (min-width: 900px) {
      font-size: 72px;
    }
    /* h1 for large screen styling */

    span:first-child {
      background: -webkit-linear-gradient(#ff69b4, #9b59b6);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    span {
      display: block;
    }
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  position: sticky;
  top: 0;
  margin: 0 auto;
  max-width: 1350px;
  padding: 0 32px;
  height: 100vh;

  .landingPage_btnContainer {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    gap: 32px;
  }

  .link {
    position: relative;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.375rem;
      width: 100%;
      height: 2px;
      transform-origin: right;
      transform: scaleX(0);
      border-radius: 4px;
      background-color: black;
      transition: all 0.3s ease-in-out;
    }
    &:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  .landing_image {
    display: none;
    transition-property: all;
    object-fit: contain;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
    /* z-index: 100; */

    @media (min-width: 768px) {
      display: block;
    }

    @media (min-width: 768px) and (max-width: 1224px) {
      width: 450px;
      height: 450px;
    }
    /* h1 for tablets  styling */
  }
`;
