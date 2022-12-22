import styled from "styled-components";

export const BackgroundImage = styled.div`
  height: 100vh;
  background-image: url(${(props) => props?.background});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BackgroundGradient = styled.div`
  width: inherit;
  min-height: inherit;
  background: linear-gradient(to top, #111 60%, transparent 100%);
`;
