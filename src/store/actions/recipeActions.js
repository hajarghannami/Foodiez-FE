import * as types from "./types";

import instance from "./instance";

// ACTIONS
export const fetchRecipes = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/recipes");
      dispatch({
        type: types.FETCH_RECIPES,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createRecipe = (newRecipe) => async (dispatch) => {
  try {
    console.log(newRecipe);
    const res = await instance.post("/recipes", newRecipe);
    dispatch({
      type: types.CREATE_RECIPE,
      payload: { newRecipe: res.data },
    });
  } catch (error) {
    console.log("error no action");
  }
};
