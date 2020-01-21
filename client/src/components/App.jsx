import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import AddMovie from './AddMovie';
import Watched from './Watched'

var movieList = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allMovies: [],
      showing: [],
      watched: [],
      toWatch: []
    }
  }

  onSearch(query) {
    var searchResults = this.state.showing.filter(element => element.title.includes(query));
    var temp = JSON.parse(JSON.stringify(this.state)).allMovies.slice();
    if (searchResults.length === 0) {
      searchResults.push({title: 'No matching titles found :('});
    }
    this.setState({
      allMovies: temp,
      showing: searchResults,
      watched: this.state.watched.slice(),
      toWatch: this.state.toWatch.slice()
    });
  }

  returnAll() {
    var list = JSON.parse(JSON.stringify(this.state)).allMovies.slice();
    this.setState({
      allMovies: list,
      showing: list,
      watched: this.state.watched.slice(),
      toWatch: this.state.toWatch.slice()
    })
  }

  addMovie(entry) {
    console.log(`Movie ${entry.title} successfully added!`);
    var toAdd = [entry];
    //var newMovies = this.state.showing.slice().concat(toAdd);
    var newToWatch = this.state.toWatch.slice().concat(toAdd);
    var newAll = this.state.allMovies.slice().concat(toAdd);
    this.setState({
      allMovies: newAll,
      showing: newAll,
      watched: this.state.watched.slice(),
      toWatch: newToWatch
    }, () => console.log(this.state));
  }

  toggleWatched() {
    this.setState({
      allMovies: this.state.allMovies.slice(),
      showing: this.state.watched.slice(),
      watched: this.state.watched.slice(),
      toWatch: this.state.toWatch.slice()
    }, () => console.log(this.state))
  }

  toggleToWatch() {
    this.setState({
      allMovies: this.state.allMovies.slice(),
      showing: this.state.toWatch.slice(),
      watched: this.state.watched.slice(),
      toWatch: this.state.toWatch.slice()
    }, () => console.log(this.state))
  }

  addToWatched (movie) {
    var newWatched = this.state.watched.slice();
    console.log(newWatched);
    if (newWatched.indexOf(movie) === -1) {
      newWatched.push(movie);
    }
    var newToWatch = this.state.toWatch.slice();
    var idx = newToWatch.indexOf(movie);
    newToWatch.splice(idx, 1);
    this.setState({
      allMovies: this.state.allMovies.slice(),
      showing: this.state.showing.slice(),
      watched: newWatched,
      toWatch: newToWatch
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div className='container'>
        <AddMovie addMovie={this.addMovie.bind(this)}/>
        <Search onSearch={this.onSearch.bind(this)} returnAll={this.returnAll.bind(this)}/>
        <Watched toggleWatch={this.toggleWatched.bind(this)} toggleToWatch={this.toggleToWatch.bind(this)}/>
        <MovieList movies={this.state.showing} addToWatched={this.addToWatched.bind(this)}/>
      </div>
    )
  }
}

export default App;