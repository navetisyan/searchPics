import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onSubmitValue = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui bottom attached active tab segment">
        <form className="ui form" onSubmit={this.onSubmitValue}>
          <div className="field">
            <label>Input search for {this.props.content}</label>
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
