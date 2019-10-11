import React from 'react';
import Products from './Products';

const Home = ({ data }) => (
  <>
    <center>
      <h2>
        All Products
    </h2>
    </center>
    <Products items={data.products} />
  </>
);

export default Home;