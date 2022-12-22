import * as C from "./style";

import Logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <C.Container>
      <img src={Logo} alt="logo" />

      <nav>
        <a href="#Movies">Movies</a>
        <a href="#TVShows">TV Shows</a>
        <a href="#All">All</a>
      </nav>
    </C.Container>
  );
};
