import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onSubmitValue = (e) => {
    e.preventDefault();
    console.log("onSubmitValue: term==", this.state.term);

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitValue}>
          <div className="field">
            <label>Input search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
