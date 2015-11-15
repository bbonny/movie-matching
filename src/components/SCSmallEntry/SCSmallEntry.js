import React, { Component } from 'react';

import Link from '../Link';

class SCSmallEntry extends Component {
  render() {
      return (
      <div>
        <a href={this.props.result.url}>{this.props.result.label}</a>
      </div>
    )
  }
}

export default SCSmallEntry;
