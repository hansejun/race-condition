import styled from "styled-components";
import { IImage } from "./ImageItem";

const LazyImage = ({ src, name }: IImage) => {
  return <Img src={src} alt={name} />;
};

export default LazyImage;

const Img = styled.img`
  width: 300px;
`;
