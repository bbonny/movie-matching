import React, { PropTypes, Component } from 'react';
import withContext from '../../decorators/withContext';
import Header from '../Header';
import SearchBox from '../SearchBox';

@withContext
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBox />
      </div>
    )
  }

}

export default App;
