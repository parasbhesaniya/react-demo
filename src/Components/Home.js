import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Products from './Products';
import Header from './Header';
import { setGreeting_2Action } from '../redux/actions/greeting_2Action';

const Home = ({ data, setGreeting_2Handler }) => {
  window.localStorage.setItem('greeting', data.greeting);
  setGreeting_2Handler(data.greeting_2);
  return (
    <>
      <Header />
      <center>
        <h2>
          All Products
      </h2>
      </center>
      <Products items={data.products} />
    </>
  );
}

const mapStateToProps = (state, props) => {
  return ({})
}

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators({
    setGreeting_2Handler: setGreeting_2Action
  },
    dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(Home);
