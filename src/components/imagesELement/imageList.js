import "../../styles/imageList.css";
import React from "react";
import ImageCard from "./imageCard";

const ImageList = (props) => {
  const imageDivs = props.images.map((image, index) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <ImageCard key={index} image={image} />;
  });

  return <div className="image-list">{imageDivs}</div>;
};

export default ImageList;
