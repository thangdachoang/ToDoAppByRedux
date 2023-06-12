const initialState = {
  filter: {
    search: "",
    status: "All",
  },
  todoList: [
    { id: 1, name: "Learn React", completed: false },
    { id: 2, name: "Learn Redux", completed: true },
    { id: 3, name: "Learn JavaScript", completed: false },
  ],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_DO":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "SEARCH_FILTER":
      return { ...state, filter: { ...state.filter, search: action.payload } };
    case "FILTER_STATUS":
      return { ...state, filter: { ...state.filter, status: action.payload } };
    case "DELETE_TO_DO":
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
      return { ...state };
    case "EDIT_TO_DO":
      console.log(action.payload.id, action.payload.data);
    case "SET_COMPLETED":
      state.todoList = state.todoList.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return { ...state };

    default:
      return state;
  }
};

export default rootReducer;
