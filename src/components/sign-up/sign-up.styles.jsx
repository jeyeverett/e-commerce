import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  .title {
    margin: 10px 0;
  }

  @media screen and (max-width: 600px) {
    margin-top: 30px;
    width: 90%;
  }
`;
