import React from 'react';
import Products from './Products';
import Header from './Header';

const Home = ({ data }) => {
  window.localStorage.setItem('greeting', data.greeting);
  return (
    <>
      <Header greeting_2={data.greeting} />
      <center>
        <h2>
          All Products
      </h2>
      </center>
      <Products items={data.products} />
    </>
  );
}

export default Home;