import React from 'react';
import { connect } from 'react-redux';

const Header = ({ greeting_2 }) => {
  const greeting = window.localStorage.getItem('greeting');
  return (
    <div>
      {greeting} | {greeting_2}
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return ({
    greeting_2: state.greetings.greeting_2
  })
}

export default connect(mapStateToProps)(Header);
