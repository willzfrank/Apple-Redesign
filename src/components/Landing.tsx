import Image from 'next/image';
import React from 'react';
import { LandingContainer } from '../../styles/LandingStyles';
import Button from '../components/Button';

type Props = {};

function Landing({}: Props) {
  return (
    <LandingContainer>
      <div>
        <h1>
          <span>Powered</span> <span>By Intellect </span>
          <span>Driven By Values</span>
        </h1>
        <div className="landingPage_btnContainer">
          <Button title="Buy Now" />
          <div className="link">Learn More</div>
        </div>
      </div>

      <div>
        <Image
          src="/assets/iphone.png"
          alt="iphone"
          width={600}
          height={650}
          className="landing_image"
        />
      </div>
    </LandingContainer>
  );
}

export default Landing;
