export const setCategory = selectedCategoryName => ({
    type: 'SET_CATEGORY', 
    selectedCategoryName,
});

export const setProduct = selectedProductId => ({
    type: 'SET_SELECTEDPRODUCT', 
    selectedProductId,
});
