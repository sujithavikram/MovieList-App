import React from 'react';
import MovieItem from './MovieItem';

// var movies = [
//   { title: 'Mean Girls', watch: false },
//   { title: 'Hackers' },
//   { title: 'The Grey' },
//   { title: 'Sunshine' },
//   { title: 'Ex Machina' },
// ];

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedMovieList: [],
      searchInput: '',
      matchedMovieList: [],
      addMovieTitle: '',
    };
    // this.getMovieItems = this.getMovieItems.bind(this);
    this.addMovieToMovieList = this.addMovieToMovieList.bind(this);
    this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleAddMovieTitle = this.handleAddMovieTitle.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  // getMovieItems() {
  //   if (this.state.matchedMovieList.length) {
  //     return this.state.matchedMovieList.map((movie, index) => {
  //       return <MovieItem key={index} movieName={movie.title} />
  //     });
  //   } else {
  //     return "no movie by that name found";
  //   }
  // }

  // shouldComponentUpdate(nexProps, nextState) {
  //   return false;
  // }


  handleInputChange(event) {
    // seState calls render()
    this.setState({ searchInput: event.target.value });
  }
  handleGoButtonClick(e) {
    e.preventDefault();
    var currentVal = this.state.searchInput;
    var listOfSelectedMovies = this.state.addedMovieList.filter(function (movie) {
      if (movie.title.toLowerCase().indexOf(currentVal.toLowerCase()) !== -1) {
        return true;
      }
    });
    // setState calls render()
    this.setState({ matchedMovieList: listOfSelectedMovies });
  }
  handleAddMovieTitle(event) {
    console.log("handleAddMovieTitle: before setstate: ", this.state.addMovieTitle)
    this.setState({ addMovieTitle: event.target.value });

    console.log("handleAddMovieTitle: after setstate: ", this.state.addMovieTitle)
  }
  handleAddButtonClick(e) {
    e.preventDefault();
    this.addMovieToMovieList(this.state.addMovieTitle);
  }
  addMovieToMovieList(userInput) {
    this.state.addedMovieList.push({ title: userInput, watch: false });
    var currentMovieList = this.state.addedMovieList;
    // clear search and show full current movie list
    this.setState({ searchInput: "", matchedMovieList: currentMovieList, addMovieTitle:"" });
  }

  updateState() {
    this.setState({});
  }
  render() {
    console.log('render')
    const contentStyle = {
      color: 'black',
      border: '1px solid black',
      borderTop: "none",
      paddingTop: '200px',
      paddingBottom: '50px',
      paddingLeft: '40px',
      paddingRight: '40px',
    };
    const titleStyle = {
      color: 'black',
      border: '1px solid black',
      padding: '10px',
      backgroundColor: 'grey'
    };

    return (
      <div style={{ width: "500px" }}>
        <div style={titleStyle}>MovieList</div>
        <div style={contentStyle}>
          <div>
            <span>
              <input type="text" value={this.state.addMovieTitle} onChange={this.handleAddMovieTitle}></input>
            </span>
            <span>
              <button onClick={this.handleAddButtonClick}>Add</button>
            </span>
          </div>
          <div>
            <span>
              <input type="text" value={this.state.searchInput} onChange={this.handleInputChange}></input>
            </span>
            <span>
              <button onClick={this.handleGoButtonClick}>Go!</button>
            </span>
          </div>
          <div>
            {this.state.matchedMovieList.length > 0 ?
              this.state.matchedMovieList.map((movie, index) => {
                return <MovieItem key={index} movieObj={movie} cb={this.updateState} />
              })
              : "no movie found"}
          </div>
        </div>
      </div>
    );
  }
}

