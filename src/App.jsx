import { useState } from "react";

import { Background } from "./components/background";
import { Header } from "./components/header";
import { DescriptionMovies } from "./components/description-movies";
import { Movies } from "./components/movies";
import { Video } from "./components/video";

import { apiData } from "./api/data";

function App() {
  const [video, setVideo] = useState(apiData?.movies[0]);
  const [play, setPlay] = useState(false);

  const { title, description, linkVideo, imageBanner } = video;

  const handleVideo = (videoData) => {
    setVideo(videoData);
    window.scrollTo({ top: 0 });
  };

  const removeVideo = () => {
    setPlay(false);
  };

  const handlePlayVideo = () => {
    if (linkVideo) {
      setPlay(true);
    }
  };

  return (
    <>
      <Background background={imageBanner}>
        <Header />
        <DescriptionMovies
          title={title}
          description={description}
          handlePlayVideo={handlePlayVideo}
        />
        <Movies
          movies={apiData}
          handleVideo={(videoData) => handleVideo(videoData)}
        />
        <Video play={play} videoId={linkVideo} removeVideo={removeVideo} />
      </Background>
    </>
  );
}

export default App;
