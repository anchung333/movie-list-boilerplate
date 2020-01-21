import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  onChange (event) {
    this.setState({
      query: event.target.value
    })
  }

  search () {
    this.props.onSearch(this.state.query);
  }

  render () {
    return (
      <div className='searcharea'>
        <input type='text' onChange={this.onChange.bind(this)} placeholder='Search for a movie'></input>
        <button className='searchbutton' onClick={this.search.bind(this)}>Go!</button>
        <button className='returnall' onClick={this.props.returnAll.bind(this)}>Show All</button>
      </div>
    )
  }
}

export default Search;