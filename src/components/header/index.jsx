import { Container } from "./style";
import logoImage from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Container>
      <img src={logoImage} alt="logo" />

      <nav>
        <a href="#movies">Movies</a>
        <a href="#tvShows">Tv Shows</a>
        <a href="#All">All</a>
      </nav>
    </Container>
  );
};
