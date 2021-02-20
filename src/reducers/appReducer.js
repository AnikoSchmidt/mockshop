export default function appReducer(state = {}, action) {
    switch (action.type) {
      case 'SET_CATEGORY': 
        return {...state, selectedCategoryName: action.selectedCategoryName};
    
     default:
       return state; 
    }
  }
    