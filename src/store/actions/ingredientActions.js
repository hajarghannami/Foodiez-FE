import * as types from "./types";

import instance from "./instance";

// ACTIONS
export const fetchIngredients = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/ingredients");
      dispatch({
        type: types.FETCH_INGREDIENTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const deleteProduct = (productId) => async (dispatch) => {
//   try {
//     await instance.delete(`/products/${productId}`);
//     dispatch({
//       type: types.DELETE_PRODUCT,
//       payload: { productId },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const createProduct = (newProduct) => async (dispatch) => {
//   try {
//     const formData = new FormData();
//     for (const key in newProduct) formData.append(key, newProduct[key]);
//     const res = await instance.post("/products", formData);
//     dispatch({
//       type: types.CREATE_PRODUCT,
//       payload: { newProduct: res.data },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updateProduct = (updatedProduct) => async (dispatch) => {
//   try {
//     const formData = new FormData();
//     for (const key in updatedProduct) formData.append(key, updatedProduct[key]);
//     const res = await instance.put(`/products/${updatedProduct.id}`, formData);

//     dispatch({
//       type: types.UPDATE_PRODUCT,
//       payload: { updatedProduct: res.data },
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
