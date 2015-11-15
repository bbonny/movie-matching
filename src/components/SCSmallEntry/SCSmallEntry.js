import React, { Component } from 'react';

import Link from '../Link';

class SCSmallEntry extends Component {
  render() {
      return (
      <div>
        <a href={this.props.result.url} target='_BLANK'>
          {this.props.result.label} ({this.props.result.description})
        </a>
      </div>
    )
  }
}

export default SCSmallEntry;
