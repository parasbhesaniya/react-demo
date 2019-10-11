const sortProducts = (items) => {
  const openRestaurant = items.filter(item => {
    return item.restaurant.openStatus === "open"
  })
  const closedRestaurant = items.filter(item => {
    return item.restaurant.openStatus !== "open"
  })

  return [...openRestaurant, ...closedRestaurant];
};

export { sortProducts };
