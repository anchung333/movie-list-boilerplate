import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toAdd: {}
    }
  }

  onChange (event) {
    this.setState({
      toAdd: {'title': event.target.value}
    })
  }

  addToList () {
    this.props.addMovie(this.state.toAdd);
  }

  render () {
    return (
      <div className='addArea'>
        <input type='text' onChange={this.onChange.bind(this)} placeholder='Add a movie'></input>
        <button className='addbutton' onClick={this.addToList.bind(this)}>Add</button>
      </div>
    )
  }
}

export default AddMovie;