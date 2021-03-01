import React from "react";
import youtube from "../../api/youtube";
import SearchBar from "../searchBar";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";

class VideoPane extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onSearchSubmit("Armenian culture");
  }

  onSearchSubmit = async (term) => {
    let result = await youtube.get("./search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: result.data.items,
      selectedVideo: result.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <SearchBar content="video" onSubmit={this.onSearchSubmit} />
        Found: {this.state.videos.length} videos
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPane;
