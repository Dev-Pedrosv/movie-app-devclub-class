import { useState } from "react";
import { Background } from "./components/background";
import { Header } from "./components/header";

import * as C from "./style";

import PlayImage from "./assets/play.svg";
import { Movies } from "./components/movies";
import { Video } from "./components/video";

import { apiData } from "./api/data";

function App() {
  const [video, setVideo] = useState(apiData?.movies[0]);
  const [play, setPlay] = useState(false);

  const backgroundImage = video?.imageBanner;
  const title = video?.title;
  const subTitle = video?.subTitle;
  const description = video?.description;
  const videoId = video?.linkVideo;

  const handleVideo = (videoData) => {
    setVideo(videoData);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const removeVideo = () => {
    setPlay(false);
  };

  const handlePlayVideo = () => {
    if (videoId) {
      setPlay(true);
    }
  };

  return (
    <>
      <Background background={backgroundImage}>
        <Header />

        <C.ContainerDescription>
          <C.Title>{title}</C.Title>
          <C.SubTitle>{subTitle}</C.SubTitle>
          <C.Description>{description}</C.Description>
          <C.Button onClick={handlePlayVideo}>
            <img src={PlayImage} alt="play" />
            Watch Now
          </C.Button>
        </C.ContainerDescription>

        <Movies
          movies={apiData}
          handleVideo={(videoData) => handleVideo(videoData)}
        />

        <Video play={play} videoId={videoId} removeVideo={removeVideo} />
      </Background>
    </>
  );
}

export default App;
