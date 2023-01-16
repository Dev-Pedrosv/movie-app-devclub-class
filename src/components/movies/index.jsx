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

  const getMovies = (category) => {
    return category ? movies[category] : [];
  };

  const getAllMovies = () => {
    return [...movies?.movies, ...movies?.tvShows];
  };

  return (
    <C.Container>
      {movies?.categories.map((category) => (
        <>
          <C.Text key={category?.name} id="category">
            {category?.name}
          </C.Text>
          <Carousel responsive={responsive}>
            {getMovies(category?.type)?.map((data, index) => (
              <C.Movie
                onClick={() => handleVideo(data)}
                src={data.imageSmall}
                key={index}
                alt={data?.title}
              />
            ))}
          </Carousel>
        </>
      ))}

      <C.Text id="All">All</C.Text>

      <Carousel responsive={responsive}>
        {getAllMovies().map((data, index) => {
          return (
            <C.Movie
              onClick={() => handleVideo(data)}
              src={data.imageSmall}
              key={index}
              alt={data?.title}
            />
          );
        })}
      </Carousel>
    </C.Container>
  );
};
