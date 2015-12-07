import React, { PropTypes, Component } from 'react';
import withContext from '../../decorators/withContext';
import Header from '../Header';
import SearchBox from '../SearchBox';
import WhishList from '../WhishList';

@withContext
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBox />
        <WhishList />
      </div>
    )
  }

}

export default App;
