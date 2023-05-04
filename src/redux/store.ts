import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {
    AddTodolistACType,
    ChangeTodolistFilterACType,
    ChangeTodolistTitleACType, getTodolistsACType,
    RemoveTodolistACType,
    todolistReducer
} from "./todolistReducer";
import {
    AddTaskACType,
    changeTaskStatusACType,
    ChangeTaskTitleACType, getTasksACType,
    RemoveTaskACType,
    tasksReducer
} from "./tasksReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({
    todolist: todolistReducer,
    tasks: tasksReducer
})

export type storeType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown,AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>





//=======================================================

export type ActionType= ChangeTodolistFilterACType |
    RemoveTodolistACType |
    AddTodolistACType |
    ChangeTodolistTitleACType |
    changeTaskStatusACType |
    AddTaskACType |
    RemoveTaskACType |
    ChangeTaskTitleACType | getTodolistsACType | getTasksACType