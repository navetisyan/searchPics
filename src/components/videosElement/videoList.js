import React from "react";
import VideoItem from "./videoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videoDivs = videos.map((video, index) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
      <VideoItem key={index} video={video} onVideoSelect={onVideoSelect} />
    );
  });

  return <div className="ui relaxed devided list">{videoDivs}</div>;
};

export default VideoList;
