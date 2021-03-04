export const PAGES = {
  HOME: 'HOME',
  CATEGORY: 'CATEGORY',
  PRODUCT: 'PRODUCT'
};

const initialState = {
  activePage: PAGES.HOME,
  selectedCategoryName: null,
  selectedProduct: null
};



export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_CATEGORY': 
        return {
          ...state, 
          selectedCategoryName: action.selectedCategoryName, 
          activePage: PAGES.CATEGORY
        };
      
      case 'SET_SELECTEDPRODUCT':
        console.log(action.selectedProductId);
        return {
          ...state, 
          selectedProductId: action.selectedProductId, 
          activePage: PAGES.PRODUCT
        };
    
     default:
       return state; 
    }
  }
    