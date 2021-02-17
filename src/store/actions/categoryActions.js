import * as types from "./types";

import instance from "./instance";

// ACTIONS
export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/categories");
      dispatch({
        type: types.FETCH_CATEGORIES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createCategory = (newCategory) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newCategory) formData.append(key, newCategory[key]);
    const res = await instance.post("/categories", formData);
    dispatch({
      type: types.CREATE_CATEGORY,
      payload: { newCategory: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};
