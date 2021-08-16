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
        <AboutImageContainer></AboutImageContainer>
        <AboutInfoContainer>
          <img
            src="https://res.cloudinary.com/dnpfrwpiq/image/upload/v1629129878/carrotcart/farmer_y9itbm.jpg"
            alt="farmer"
          />
          <AboutText>
            <div className="title">Hand grown with love and care</div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              nesciunt ullam nisi ipsa, eum aut ex fuga quibusdam iste dolores
              libero. Nihil blanditiis eius ullam distinctio sint iste ratione
              cumque!
            </span>
          </AboutText>
          <AboutText>
            <div className="title">Raised the highest quality seeds</div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              nesciunt ullam nisi ipsa, eum aut ex fuga quibusdam iste dolores
              libero. Nihil blanditiis eius ullam distinctio sint iste ratione
              cumque!
            </span>
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
