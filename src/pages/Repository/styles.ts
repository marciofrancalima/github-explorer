import styled from 'styled-components';
import media from 'styled-media-query';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #666666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 8rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;

      ${media.lessThan('small')`
        width: 6rem;
        height: 6rem;
      `}
    }

    div {
      margin-left: 2.4rem;

      strong {
        font-size: 3.6rem;
        color: #3d3d4d;

        ${media.lessThan('small')`
          font-size: 2rem;
        `}
      }

      p {
        font-size: 1.8rem;
        color: #737380;
        margin-top: 4px;

        ${media.lessThan('small')`
          font-size: 1.4rem;
        `}
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 4rem;

    li {
      & + li {
        margin-left: 8rem;
      }

      strong {
        display: block;
        font-size: 3.6rem;
        color: #3d3d4d;

        ${media.lessThan('small')`
          font-size: 2rem;
        `}
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;

        ${media.lessThan('small')`
          font-size: 1.4rem;
        `}
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 8rem;

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

    div {
      margin: 0 1.6rem;
      flex: 1;

      strong {
        font-size: 2rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8b3;
        margin-top: 4px;

        ${media.lessThan('small')`
          font-size: 1.4rem;
        `}
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
