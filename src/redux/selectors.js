export const todoListSelector = (state)=>{

    const todoRemaining = state.todoList.filter((todo)=>{
        if(state.filter.status === "All"){
            return todo.name.includes(state.filter.search)
        }
        return todo.name.includes(state.filter.search) && (state.filter.status === 'Completed' ? todo.completed : !todo.completed )
    })

    return todoRemaining;
};



