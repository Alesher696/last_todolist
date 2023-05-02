import {combineReducers, createStore} from "redux";
import {
    AddTodolistACType,
    ChangeTodolistFilterACType,
    ChangeTodolistTitleACType,
    RemoveTodolistACType,
    todolistReducer
} from "./todolistReducer";
import {
    AddTaskACType,
    changeTaskStatusACType,
    ChangeTaskTitleACType,
    RemoveTaskACType,
    tasksReducer
} from "./tasksReducer";

const rootReducer = combineReducers({
    todolist: todolistReducer,
    tasks: tasksReducer
})

export type storeType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)






export type ActionType= ChangeTodolistFilterACType |
    RemoveTodolistACType |
    AddTodolistACType |
    ChangeTodolistTitleACType |
    changeTaskStatusACType |
    AddTaskACType |
    RemoveTaskACType |
    ChangeTaskTitleACType