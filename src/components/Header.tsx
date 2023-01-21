import Image from 'next/image';
import React from 'react';
import {
  HeaderContainer,
  HeaderIcon,
  HeaderBox,
  HeaderListBox,
  HeaderListNav,
  HeaderListIconBox,
} from '@/styles/Header';
import Link from 'next/link';

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <Link href="/" className="logo_link">
          <Image
            src="/assets/Apple_logo_black.svg.png"
            width={20}
            height={40}
            alt="logo"
            className="header_logo"
          />
        </Link>
        <HeaderListBox>
          <div className="headerListBox">
            <HeaderListNav>
              <p className="header_logo">Product</p>
              <p className="header_logo">Explore</p>
              <p className="header_logo">Support</p>
              <p className="header_logo">Business</p>
            </HeaderListNav>
            <HeaderListIconBox>
              {/* search icon */}
              <HeaderIcon className="header_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </HeaderIcon>
              {/* cart icon */}
              <HeaderIcon className="header_logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="header_iconBadge">5</span>
              </HeaderIcon>

              {/* profile image */}
              <HeaderIcon className="header_logo">
                {/* <Image
                  src="/assets/profile.avif"
                  alt=""
                  width={34}
                  height={34}
                  className="profile_pics"
                /> */}
                <HeaderIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </HeaderIcon>
              </HeaderIcon>
            </HeaderListIconBox>
          </div>
        </HeaderListBox>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
