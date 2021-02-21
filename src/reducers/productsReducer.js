export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case 'POPULATE_PRODUCTS': 
    const productsByCategory = action.payload.reduce(
      (accumulator, product) => {
        const category = product.category;
        return {
          ...accumulator,
          [category]: [...(accumulator[category] || []), product],
        };
      },
      {}
    );
    return {...state, products: action.payload, productsByCategory };

    case 'POPULATE_PRODUCTPAGE': 
    const productsById = action.payload.reduce(
      (accumulator, product) => {
        const productId = product.id;
        return {
          ...accumulator,
          [productId]: [...(accumulator[productId] || []), product],
        };
      },
      {}
    );
    return {...state, productId: action.payload, productsById };

   default:
     return state; 
  }
}
  