import React from 'react';

const Header = ({ greeting_2 }) => {
  const greeting = window.localStorage.getItem('greeting');
  return (
    <div>
      {greeting} | {greeting_2}
    </div>
  )
}

export default Header;