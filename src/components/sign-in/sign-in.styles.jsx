import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  .title {
    margin: 10px 0;
  }

  .button {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
