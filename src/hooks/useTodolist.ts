import {useDispatch} from "react-redux";
import {AddTaskAC} from "../redux/tasksReducer";
import {ChangeTodolistFilterAC, ChangeTodolistTitleAC, RemoveTodolistAC} from "../redux/todolistReducer";


export const useTodolist =(id: string, title: string, filter: string)=>{

    const dispatch = useDispatch()

    const addTask = (title: string) => {
        dispatch(AddTaskAC(id, title))
    }

    const removeTodoList = () => {
        dispatch(RemoveTodolistAC(id))
    }

    const changeFilter = (filter: string) => {
        dispatch(ChangeTodolistFilterAC(id, filter))
    }

    const changeTodoTitle=(title:string, id:string)=>{
        dispatch(ChangeTodolistTitleAC(id,title))
    }
    return {
        addTask,
        removeTodoList,
        changeFilter,
        changeTodoTitle

    }
}