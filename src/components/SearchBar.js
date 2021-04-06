import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  // resetSearch = () => {
  //   this.setState({ term: "" });
  // };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* <button class="ui button" type="submit">
              Submit
            </button>
            <button class="ui button" onClick={this.resetSearch}>
              Reset
            </button> */}
          </div>
        </form>
      </div>
    );
  }
}

//for searching results as you type

// class SearchBar extends React.Component {
//   state = { term: "" };

//   onFormSubmit = (term) => {
//     this.setState({ term });
//     this.props.onSubmit(term);
//   };

//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.term}
//           onChange={(event) => this.onFormSubmit(event.target.value)}
//         />
//       </div>
//     );
//   }
// }

export default SearchBar;
