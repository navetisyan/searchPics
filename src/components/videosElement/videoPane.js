import React from "react";
import youtube from "../../api/youtube";
import SearchBar from "../searchBar";
import VideoList from "./videoList";

class VideoPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    this.tabRef = React.createRef();
  }

  onSearchSubmit = async (term) => {
    console.log("term==", term);

    let result = await youtube.get("./search", {
      snippet: term,
    });

    // let result = await youtube.get("./search", {
    //   params: {
    //     q: term,
    //   }
    // });
    this.setState({ videos: result.data.items });
  };

  render() {
    return (
      <div>
        <SearchBar content="video" onSubmit={this.onSearchSubmit} />
        Found: {this.state.videos.length} videos
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default VideoPane;
