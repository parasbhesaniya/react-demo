import React from 'react';
import { Provider } from 'react-redux';
import { ReactReduxContext } from 'react-redux'

import store from './redux/store';
import { Home } from "./Components";
import { api } from './services/apiService';

class App extends React.Component {
  constructor(props) {
    super(props);
    api.getData({ name: 'test' })
      .then(res => {
        this.setState({
          ...res.data,
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  render() {
    if (this.state) {
      return (
        <Provider store={store}>
          <Home data={this.state} />
        </Provider>
      );
    }
    return null;
  }
}

export default App;
