import * as types from "../actions/types";

const initialState = {
  ingredients: [],
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    //   case "DELETE_PRODUCT":
    //     return {
    //       ...state,
    //       products: state.products.filter(
    //         (product) => product.id !== action.payload.productId
    //       ),
    //     };
    //   case "CREATE_PRODUCT":
    //     return {
    //       ...state,
    //       products: [...state.products, action.payload.newProduct],
    //     };
    //   case "UPDATE_PRODUCT":
    //     return {
    //       ...state,
    //       products: state.products.map((product) => {
    //         if (action.payload.updatedProduct.id === product.id)
    //           return action.payload.updatedProduct;
    //         else return product;
    //       }),
    //     };
    default:
      return state;
  }
};

export default ingredientReducer;
