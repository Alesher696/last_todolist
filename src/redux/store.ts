import {combineReducers, createStore} from "redux";
import {todolistReducer} from "./todolistReducer";
import {tasksReducer} from "./tasksReducer";

const rootReducer = combineReducers({
    todolist: todolistReducer,
    tasks: tasksReducer
})

export type storeType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

