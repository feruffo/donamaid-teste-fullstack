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

export const Order = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  position: relative;

  strong {
    display: block;
    color: #612f7c;
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    margin: 3px;
    color: #666;
  }

  button {
    position: absolute;
    right: 10px;
    top: 22px;
    border: 0;
    background: transparent;
  }
`;
