import React from "react";

const ImageList = (props) => {
  console.log("props==", props);
  const imageDivs = props.images.map((image, index) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img key={index} alt={image.description} src={image.urls.regular} />;
  });

  return <div>{imageDivs}</div>;
};

export default ImageList;
