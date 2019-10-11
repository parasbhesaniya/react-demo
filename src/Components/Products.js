import React from 'react';

const Products = ({ items }) => {
  return (
    items.map(item => (
      <div key={item.name}>
        <hr />
        <img
          src={(item.image && item.image) || 'https://screenshotlayer.com/images/assets/placeholder.png'}
          alt={item.name}
          width="200px"
          height="200px"
        />
        <h3>
          {item.name}
        </h3>
        <h2>
          ${item.price}
        </h2>
        <p>
          restaurant : {item.restaurant.name} ({item.restaurant.openStatus})
        </p>
        <p>
          Rating : {item.rating}/5
        </p>
        <p>
          {item.description}
        </p>
        <p>
          Total Reviews: {item.reviewsCount}
        </p>
        <hr />
      </div>
    ))
  );
}

export default Products;
