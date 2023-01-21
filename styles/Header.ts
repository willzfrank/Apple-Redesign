import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #e7ecee;
  position: sticky;
  top: 0;
  z-index: 50;
  font-family: 'Poppins', sans-serif;
  color: #232428;
`;

export const HeaderIcon = styled.i`
  position: relative;
  svg {
    width: 24px;
    height: 24px;
  }

  .header_iconBadge {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background-image: linear-gradient(to right, #ec4899, #8b5cf6);
    top: -4px;
    right: -4px;
    height: 16px;
    width: 16px;
    font-size: 10px;
    color: white;
  }

  .profile_pics {
    border-radius: 9999px;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  .logo_link {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 20%;
    }
  }

  .header_logo {
    opacity: 0.75;
    cursor: pointer;
    object-fit: contain;

    &:hover {
      transition: 0.5s ease-in-out;
      opacity: 1;
    }
  }
`;

export const HeaderListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;

  .headerListBox {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
    justify-content: flex-end;
  }
`;

export const HeaderListIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: flex-end;
    width: 100%;
  }
`;

export const HeaderListNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  font-size: 17px;
  /* margin-left: 22px; */

  @media (max-width: 768px) {
    display: none;
  }
`;
