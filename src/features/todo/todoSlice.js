import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, text: "Hello World", completed: false}]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.filter((todo) => todo.id !== action.payload);
        },
        updateTodo:(state, action) => {
            const {id, text} = action.payload;
            const exsitingTodo = state.todos.find((todo) => todo.id === id);
            if(exsitingTodo){
                exsitingTodo.text = text;
            }
        },
        toggoleTodo:(state, action) => {
            const {id} = action.payload;
            const exsitingTodo = state.todos.find((todo) => todo.id === id);
            if (exsitingTodo) {
                exsitingTodo.completed = !exsitingTodo.completed;
            }
        }
    }
});

export const {addTodo, removeTodo, updateTodo, toggoleTodo} = todoSlice.actions;
export default todoSlice.reducer;