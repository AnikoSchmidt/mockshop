import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
  } from '../actions/productsActions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null
  };
  
  export default function productReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:

        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        let items = action.payload.json.reduce(function (r, a) {
          r[a.category] = r[a.category] || [];
          r[a.category].push(a);
          return r;
      }, Object.create(null));  

        return {
          ...state,
          loading: false,
          items: items,
        };
  
      case FETCH_PRODUCTS_FAILURE:
        
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        return state;
    }
  }