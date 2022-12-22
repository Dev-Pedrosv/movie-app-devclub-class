import { Player, Youtube } from "@vime/react";
import * as C from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Video = ({ play, videoId, removeVideo }) => {
  return (
    videoId &&
    play && (
      <C.Container>
        <C.Button onClick={removeVideo}>
          <AiOutlineArrowLeft />
          Back
        </C.Button>
        <Player controls>
          <Youtube videoId={videoId} />
        </Player>
      </C.Container>
    )
  );
};
