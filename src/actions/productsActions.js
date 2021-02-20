export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = json => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { json }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("https://fakestoreapi.com/products")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            console.log('j', json);

          dispatch(fetchProductsSuccess(json));


          return json.body;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }