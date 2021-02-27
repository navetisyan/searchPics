import React from "react";
import SearchBar from "./searchBar";
import ImageList from "./imageList";

class VideoPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };

    this.tabRef = React.createRef();
  }

  onSearchSubmit = async (term) => {
    console.log("term==", term);
  };

  render() {
    return (
      <div>
        <SearchBar content="video" onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default VideoPane;
