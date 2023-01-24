import { BackgroundImage, BackgroundGradient } from "./style";

export const Background = ({ children, imageBanner }) => {
  return (
    <BackgroundImage bgImage={imageBanner}>
      <BackgroundGradient>{children}</BackgroundGradient>
    </BackgroundImage>
  );
};
