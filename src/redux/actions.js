export const addTodo = (data) => {
  return {
    type: "ADD_TO_DO",
    payload: data,
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TO_DO",
    payload: id,
  };
};
export const editTodo = (id, data) => {
  return {
    type: "EDIT_TO_DO",
    payload: {id,data},
  };
};
export const setCompleted = (id) => {
  return {
    type: "SET_COMPLETED",
    payload: id,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "SEARCH_FILTER",
    payload: text,
  };
};

export const filterStatusChange = (status) => {
  return {
    type: "FILTER_STATUS",
    payload: status,
  };
};
