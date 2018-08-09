import React, { Component } from 'react';

class Loading extends Component {

  render() {
    return (
      <div className="loading-component">
        <div className="loading-icon">
          <div className="animated-box"></div>
        </div>
      </div>
    );
  }
}

export default Loading;