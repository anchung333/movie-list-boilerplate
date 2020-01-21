import React from 'react';

class Watched extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={this.props.toggleWatch}>Watched</button><button onClick={this.props.toggleToWatch}>To Watch</button>
      </div>
    )
  }
}

export default Watched;