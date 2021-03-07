export const setCategory = selectedCategoryName => {
    return {
        type: 'SET_CATEGORY', 
        selectedCategoryName,
    };
};

export const setProduct = selectedProductId => {
    return {
        type: 'SET_SELECTEDPRODUCT', 
        selectedProductId,
    };
}

export const setSearch = searchTerm => {
    return {
        type: 'SET_SEARCH',
        searchTerm,
    };
}

export const setHomePage = () => {
    return {
        type: 'SET_HOME_PAGE',
    };
}