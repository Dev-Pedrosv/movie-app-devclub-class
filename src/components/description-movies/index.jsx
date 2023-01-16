import * as C from "./style";
import { BsPlayFill } from "react-icons/bs";

export const DescriptionMovies = ({ title, description, handlePlayVideo }) => {
  return (
    <C.ContainerDescription>
      <C.Title>{title}</C.Title>
      <C.Description>{description}</C.Description>
      <C.Button onClick={handlePlayVideo}>
        <BsPlayFill size={24} />
        Watch Now
      </C.Button>
    </C.ContainerDescription>
  );
};
