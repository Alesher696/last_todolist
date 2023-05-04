import {ActionType} from "./store";
import {Dispatch} from "redux";
import {TasksAPI, TaskStatuses, TaskType} from "../api/todolist-api";



// type SummaryTaskType = TaskType & {
//     isDone: boolean
// }

export type initialStateTaskType = {
    [key: string]: TaskType[]
}

const initialState = {

}

export const tasksReducer = (state: initialStateTaskType = initialState, action: ActionType): initialStateTaskType => {
    switch (action.type) {
        case "GET-TASKS":{
            return {...state, [action.todolistId]: action.tasks.map(el => ({...el}))}
        }
        case 'CHANGE-TASK-STATUS': {
        let todolistTasks = state[action.todolistId]
            let newTaskArray = todolistTasks.map(t => t.id === action.taskId ? {...t, status: action.status}: t)
            state[action.todolistId] = newTaskArray
            return {...state}
           // return ({...state, [action.todolistId] : state[action.todolistId].map(t => t.id === action.taskId ? {...t, status: action.status}: t)})
        }
        case 'ADD-TODOLIST':
            return state
        case 'ADD-TASK':{
            let newTasksSUM:TaskType={...action.newTask}
            return {...state,[action.todolistId]:[newTasksSUM,...state[action.todolistId]]}
        }
        case'REMOVE-TASK':{
            return {...state, [action.todoListId] : state[action.todoListId].filter(el=> el.id !== action.taskId)}
        }
        case 'REMOVE-TODOLIST':{
            const copyState = {...state}
            delete copyState[action.todolistId]
            return copyState
        }
        case 'CHANGE-TASK-TITLE':{
            return {...state, [action.todoListId] : state[action.todoListId].map(el=>el.id === action.taskId?{...el, title: action.newTitle} :el)}
        }
        default:
            return state
    }
}
export type changeTaskStatusACType = ReturnType<typeof ChangeTaskStatusAC>
export const ChangeTaskStatusAC = (todolistId: string, taskId: string, status: TaskStatuses) => {
    return {
        type: "CHANGE-TASK-STATUS",
        todolistId,
        taskId,
        status
    } as const
}

export type AddTaskACType = ReturnType<typeof AddTaskAC>
export const AddTaskAC = (todolistId:string, newTask:TaskType)=>{
    return{
        type: 'ADD-TASK',
        newTask,
        todolistId
    } as const
}

export type RemoveTaskACType = ReturnType<typeof RemoveTaskAC>
export const RemoveTaskAC= (todoListId:string, taskId:string)=>{
    return{
        type: 'REMOVE-TASK',
        todoListId,
        taskId
    }as const
}
export type ChangeTaskTitleACType = ReturnType<typeof ChangeTaskTitleAC>
export const ChangeTaskTitleAC = (todoListId:string, taskId:string, newTitle:string)=>{
    return{
        type: 'CHANGE-TASK-TITLE',
        todoListId,
        taskId,
        newTitle
    }as const
}
export type getTasksACType = ReturnType<typeof getTasksAC>
const getTasksAC = (todolistId: string, tasks: TaskType[])=>{
    return{
        type: 'GET-TASKS',
        todolistId,
        tasks
    } as const

}
export const getTasksTC = (todolistId:string) => async(dispatch:Dispatch)=>{
    try {
        const result = await TasksAPI.getTasks(todolistId)
        dispatch(getTasksAC(todolistId, result.data.items))
    }
    catch (e){
        console.log(e)
    }
}
export const addTaskTC = (todolistId:string, title:string) => async (dispatch:Dispatch)=>{
    try {
        const result = await TasksAPI.addTask(todolistId, title)
        dispatch(AddTaskAC(todolistId, result.data.data.item))
    }
  catch (e){
      console.log(e)
  }
}
export const removeTaskTC = (todolistId: string, taskId: string)=> async (dispatch:Dispatch)=>{
    try{
        const result = await TasksAPI.deleteTask(todolistId,taskId)
        dispatch(RemoveTaskAC(todolistId,taskId))
    }
    catch (e){
        console.log(e)
    }
}

// export const updateTaskStatusTC =(todolistId: string, taskId: string, status:TaskStatuses) => async (dispatch:Dispatch)=>{
//         const result = await TasksAPI.updateTaskStatus(todolistId, taskId, status)
//     console.log(result)
//         dispatch(ChangeTaskStatusAC(todolistId,taskId, result.status))
// }