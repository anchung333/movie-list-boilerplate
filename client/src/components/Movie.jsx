import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  toggleWatched() {
    this.props.addToWatched(this.props.movie);
  }

  render() {
    return (
      <div className='movie'>
        <span>{this.props.movie.title}</span>
        <button className='watchedbutton' onClick={this.toggleWatched.bind(this)}>Watched</button>
      </div>
    )
  }
};

export default Movie;