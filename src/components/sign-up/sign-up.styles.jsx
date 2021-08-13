import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: 0 auto;

  .title {
    margin: 10px 0;
    color: white;
  }

  .button {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    margin-top: 30px;
    width: 90%;
  }
`;
