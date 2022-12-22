import * as C from "./style";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Movies = ({ movies, handleVideo }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <C.Container>
      <C.Text id="Movies">Movies</C.Text>

      <Carousel responsive={responsive}>
        {movies?.movies?.map((data, index) => {
          return (
            <C.Movie
              onClick={() => handleVideo(data)}
              src={data.imageSmall}
              key={index}
              alt="movie"
            />
          );
        })}
      </Carousel>

      <C.Text id="TVShows">TV Shows</C.Text>

      <Carousel responsive={responsive}>
        {movies?.tvShows?.map((data, index) => {
          return (
            <C.Movie
              onClick={() => handleVideo(data)}
              src={data.imageSmall}
              key={index}
              alt="movie"
            />
          );
        })}
      </Carousel>

      <C.Text id="All">All</C.Text>

      <Carousel responsive={responsive}>
        {movies?.movies?.map((data, index) => {
          return (
            <C.Movie
              onClick={() => handleVideo(data)}
              src={data.imageSmall}
              key={index}
              alt="movie"
            />
          );
        })}
        {movies?.tvShows?.map((data, index) => {
          return (
            <C.Movie
              onClick={() => handleVideo(data)}
              src={data.imageSmall}
              key={index}
              alt="movie"
            />
          );
        })}
      </Carousel>
    </C.Container>
  );
};
