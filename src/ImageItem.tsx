import { lazy, Suspense } from "react";

export interface IImage {
  src: string;
  name: string;
}

const LazyImage = lazy(() => import("./LazyImage"));

const ImageItem = ({ src, name }: IImage) => {
  return (
    <>
      <Suspense fallback={<span>...loading</span>}>
        <LazyImage src={src} name={name} />
      </Suspense>
      {name}
    </>
  );
};

export default ImageItem;
