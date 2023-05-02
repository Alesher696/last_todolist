import {useDispatch} from "react-redux";
import {ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC} from "../redux/tasksReducer";
import {ChangeEvent} from "react";
import {TasksPropsType} from "../Tasks";

export const useTask = (props: TasksPropsType)=>{

    const dispatch = useDispatch()

    const changeTaskStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        dispatch(ChangeTaskStatusAC(todolistId, taskId, isDone))
    }

    const changeTaskTitle = (newTitle: string, taskId: string) => {
        dispatch(ChangeTaskTitleAC(props.todolistId, taskId, newTitle))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, taskId:string) => {
        changeTaskStatus(props.todolistId, taskId, e.currentTarget.checked)
    }

    const removeTask = (taskId:string) => {
        dispatch(RemoveTaskAC(props.todolistId, taskId))
    }

    return{
        changeTaskStatus,
        changeTaskTitle,
        onChangeHandler,
        removeTask
    }
}