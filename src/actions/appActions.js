export const setCategory = selectedCategoryName => ({
    type: 'SET_CATEGORY', 
    selectedCategoryName,
});

export const setProduct = selectedProductId => {
    console.log(selectedProductId)
    return {
    type: 'SET_SELECTEDPRODUCT', 
    selectedProductId,
};
}
