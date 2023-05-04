import {ChangeTaskStatusAC, ChangeTaskTitleAC, removeTaskTC} from "../redux/tasksReducer";
import {TasksPropsType} from "../Tasks";

import {useAppDispatch} from "./hooks";
import {TaskStatuses} from "../api/todolist-api";

export const useTask = (props: TasksPropsType)=>{

    const dispatch = useAppDispatch()

    const changeTaskStatus = (todolistId: string, taskId: string, status:TaskStatuses) => {
        dispatch(ChangeTaskStatusAC(todolistId, taskId, status))
    }

    const changeTaskTitle = (newTitle: string, taskId: string) => {
        dispatch(ChangeTaskTitleAC(props.todolistId, taskId, newTitle))
    }

    const removeTask = (taskId:string) => {
        dispatch(removeTaskTC(props.todolistId, taskId))
    }

    return{
        changeTaskStatus,
        changeTaskTitle,
        removeTask
    }
}