import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  max-width: 45rem;
  font-size: 48px;
  color: #3a3a3a;
  line-height: 5.6rem;
  margin-top: 8rem;
`;

export const Form = styled.form`
  margin-top: 4rem;
  max-width: 70rem;
  display: flex;

  input {
    flex: 1;
    height: 7rem;
    padding: 0 2.4rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 21rem;
    height: 7rem;
    border: 0;
    background-color: #04d361;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 8rem;
  max-width: 70rem;

  a {
    width: 100%;
    background-color: #fff;
    display: block;
    padding: 2.4rem;
    border-radius: 5px;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 1rem;
    }

    &:hover {
      transform: translateX(1rem);
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }

    div {
      margin-left: 1.6rem;

      strong {
        font-size: 2rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
