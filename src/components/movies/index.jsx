import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import * as C from "./style";

export const Movies = ({ data, handleVideo }) => {
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
    return data?.movies?.filter((movie) => movie?.category === category);
  };

  return (
    <C.Container>
      {data?.categories?.map((category) => (
        <>
          <C.Text key={category?.type} id={category?.type}>
            {category?.name}
          </C.Text>

          <Carousel responsive={responsive}>
            {getMovies(category?.type).map((data, index) => (
              <C.Movie
                src={data?.imageSmall}
                alt={data?.title}
                key={index}
                onClick={() => handleVideo(data)}
              />
            ))}
          </Carousel>
        </>
      ))}

      <C.Text id="All">All</C.Text>

      <Carousel responsive={responsive}>
        {data?.movies.map((data, index) => (
          <C.Movie
            src={data?.imageSmall}
            alt={data?.title}
            key={index}
            onClick={() => handleVideo(data)}
          />
        ))}
      </Carousel>
    </C.Container>
  );
};
