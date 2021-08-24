import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: min-content;

  width: 75%;
  margin: 0 auto;
  padding: 30px 40px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  .title {
    margin: 0 0 10px 0;
    color: white;
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }

  .subtitle {
    color: white;
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }

  .button {
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    padding: 20px 20px;
  }
`;
