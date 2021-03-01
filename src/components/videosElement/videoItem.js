import React from "react";
import "../../styles/videoItem.css";

class VideoItem extends React.Component {
  render() {
    const { thumbnails, title, description } = this.props.video.snippet;
    return (
      <div className="video-item item">
        <img
          className="ui image"
          alt={description}
          src={thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
