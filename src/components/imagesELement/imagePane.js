import React from "react";
import unsplash from "../../api/unsplash";
import SearchBar from "../searchBar";
import ImageList from "./imageList";

class ImagePane extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };

    this.tabRef = React.createRef();
  }

  onSearchSubmit = async (term) => {
    console.log("term==", term);
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar content="image" onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default ImagePane;
