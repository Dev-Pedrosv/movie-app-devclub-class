import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;

  @media (max-width: 560px) {
    padding: 20px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  a {
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.03em;
    color: #ffffff;
    transition: 0.3s;
    text-decoration: none;
    position: relative;

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }

  a:hover {
    opacity: 0.7;
  }

  a::after {
    content: "";
    width: 0;
    height: 2px;
    background-color: #ffffff;
    position: absolute;
    bottom: 2px;
    left: 0;
    transition: 0.3s;
  }

  a:hover::after {
    width: 100%;
  }

  img {
    @media (max-width: 560px) {
      width: 80px;
    }
  }
`;
