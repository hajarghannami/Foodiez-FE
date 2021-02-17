import * as types from "../actions/types";

const initialState = {
  categories: [],
  loading: true,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case types.CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload.newCategory],
      };

    //   case "DELETE_PRODUCT":
    //     return {
    //       ...state,
    //       products: state.products.filter(
    //         (product) => product.id !== action.payload.productId
    //       ),
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

export default categoryReducer;
