import { BackgroundImage, BackgroundGradient } from "./style";

export const Background = ({ background, children }) => {
  return (
    <BackgroundImage background={background}>
      <BackgroundGradient>{children}</BackgroundGradient>
    </BackgroundImage>
  );
};
