import Image from 'next/image';
import React from 'react';
import { LandingContainer } from '../../styles/LandingStyles';

type Props = {};

function Landing({}: Props) {
  return (
    <LandingContainer>
      <div>
        <h1>
          <span>Powered</span> <span>By Intellect </span>
          <span>Driven By Values</span>
        </h1>
        <div>
          <button>Buy Now</button>
          <div>Learn More</div>
        </div>
      </div>

      {/* <div>
        <Image src="" alt="" width={} height={} />
      </div> */}
    </LandingContainer>
  );
}

export default Landing;
