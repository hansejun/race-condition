import { imageData } from "./fakeImages";
import ImageItem from "./ImageItem";

const Images = () => {
  return (
    <div>
      {imageData.map((image) => (
        <ImageItem key={image.id} src={image.src} name={image.name} />
      ))}
    </div>
  );
};

export default Images;
