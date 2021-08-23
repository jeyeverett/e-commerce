import React from 'react';

import {
  AboutPageContainer,
  StyledTitle,
  AboutImageContainer,
  AboutInfoContainer,
  AboutContainer,
  AboutText,
} from './about-page.styles';

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <StyledTitle>About Us</StyledTitle>
      <AboutContainer>
        <AboutInfoContainer>
          <img
            src="https://res.cloudinary.com/dnpfrwpiq/image/upload/v1629129878/carrotcart/farmer_y9itbm.jpg"
            alt="farmer"
          />
          <AboutText>
            <h2 className="title">Hand grown with love and care</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              nesciunt ullam nisi ipsa, eum aut ex fuga quibusdam iste dolores
              libero. Nihil blanditiis eius ullam distinctio sint iste ratione
              cumque!
            </p>
          </AboutText>
          <AboutText>
            <h2 className="title">Raised from the highest quality seeds</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              nesciunt ullam nisi ipsa, eum aut ex fuga quibusdam iste dolores
              libero. Nihil blanditiis eius ullam distinctio sint iste ratione
              cumque!
            </p>
          </AboutText>
          <img
            src="https://res.cloudinary.com/dnpfrwpiq/image/upload/v1629129878/carrotcart/seedlings_osyzzy.jpg"
            alt="seedlings"
          />
        </AboutInfoContainer>
      </AboutContainer>
    </AboutPageContainer>
  );
};

export default AboutPage;
