import React from 'react';

const Products = ({ items }) => {
  return (
    items.map(item => (
      <div key={item.name}>
        <hr />
        <img
          src={item.image}
          width="200"
          height="200"
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