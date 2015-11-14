import React, { Component } from 'react';
import styles from './SearchBox.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class SearchBox extends Component {

  render() {
    return (
      <div className="SearchBox">
        <input type="text" autofocus placholder="Model" />
      </div>
    );
  }

}

export default SearchBox;
