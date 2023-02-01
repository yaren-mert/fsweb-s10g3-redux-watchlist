export const FAV_ADD = "FAV_ADD";
export const FAV_DElETE = "FAV_DELETE";

export const favAdd = (newFav) => ({
  type: FAV_ADD,
  payload: newFav,
});

export const favDelete = (id) => ({
  type: FAV_DElETE,
  payload: id,
});
