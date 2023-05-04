import {addTaskTC} from "../redux/tasksReducer";
import {
    AddTodolistTC,
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    DeleteTodolistTC,
} from "../redux/todolistReducer";
import {useAppDispatch} from "./hooks";


export const useTodolist =(id: string, title: string, filter: string)=>{

    const dispatch = useAppDispatch()

    const addTodolist = (title: string) => {
        dispatch(AddTodolistTC(title))
    }

    const addTask = (title: string) => {
        dispatch(addTaskTC(id, title))
    }

    const removeTodoList = () => {
        dispatch(DeleteTodolistTC(id))
    }

    const changeFilter = (filter: string) => {
        dispatch(ChangeTodolistFilterAC(id, filter))
    }

    const changeTodoTitle=(title:string, id:string)=>{
        dispatch(ChangeTodolistTitleAC(id,title))
    }
    return {
        addTodolist,
        addTask,
        removeTodoList,
        changeFilter,
        changeTodoTitle
    }
}