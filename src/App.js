import React from 'react';

import { Home } from "./Components";
import { api } from './services/apiService';

class App extends React.Component {
  constructor(props) {
    super(props);
    api.getData({ name: 'test' })
      .then(res => {
        this.setState({
          ...res,
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    console.log(this.state);
    if (this.state) {
      return (
        <Home />
      );
    }
    return null;
  }
}

export default App;
