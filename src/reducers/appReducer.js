export default function appReducer(state = {}, action) {
    switch (action.type) {
      case 'SET_CATEGORY': 
        return {...state, selectedCategoryName: action.selectedCategoryName};
      
      case 'SET_SELECTEDPRODUCT':
        return {...state, selectedProduct: action.selectedProduct};
    
     default:
       return state; 
    }
  }
    