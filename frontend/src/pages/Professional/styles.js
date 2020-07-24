import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
    color: #fff;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
  }
`;

export const ProfessionalButton = styled.button`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  border: 0;

  strong {
    display: block;
    color: #612f7c;
    font-size: 15px;
    font-weight: normal;
  }

  img {
    height: 55px;
    width: 55px;
    border-radius: 50%;
  }
`;
