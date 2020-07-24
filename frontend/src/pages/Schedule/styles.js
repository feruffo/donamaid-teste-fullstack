import styled from 'styled-components';

export const Container = styled.div`
  max-width: 650px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
    color: #fff;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
  }
`;

export const ScheduleButton = styled.button`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  border: 0;

  opacity: ${props => (props.available ? 1 : 0.6)};

  strong {
    display: block;
    color: ${props => (props.available ? '#612f7c' : '#999')};
    font-size: 15px;
    font-weight: normal;
  }
`;
