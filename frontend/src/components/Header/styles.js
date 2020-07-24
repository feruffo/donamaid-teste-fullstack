import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 55px;
      width: 55px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid;
    }

    a {
      font-weight: bold;
      color: #612f7c;
      margin-right: 20px;
    }

    button {
      margin: 5px 0 0;
      height: 50px;
      width: 210px;
      background: #612f7c;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#612f7c')};
      }
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;
