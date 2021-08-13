import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 30px;

  .title {
    margin: 10px 0;
    color: white;
  }

  .button {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }
`;
