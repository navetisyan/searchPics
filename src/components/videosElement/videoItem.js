import "../../styles/videoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const { thumbnails, title, description } = video.snippet;
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" alt={description} src={thumbnails.medium.url} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
