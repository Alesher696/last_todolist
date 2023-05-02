import {v1} from "uuid";
import {todolistId1, todolistId2} from "./todolistReducer";
import {ActionType} from "./store";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type initialStateTaskType = {
    [key: string]: TaskType[]
}


const initialState = {
    [todolistId1]: [
        {id: v1(), title: "HTML&CSS", isDone: false},
        {id: v1(), title: "JS", isDone: true}
    ],
    [todolistId2]: [
        {id: v1(), title: "Milk", isDone: false},
        {id: v1(), title: "React Book", isDone: true}
    ]
}

export const tasksReducer = (state: initialStateTaskType = initialState, action: ActionType): initialStateTaskType => {
    switch (action.type) {
        case 'CHANGE-TASK-STATUS': {
            return {...state, [action.todolistId]: state[action.todolistId].map(el=>el.id === action.taskId ? {...el, isDone: action.isDone}: el) }
        }
        case 'ADD-TODOLIST':
            return {...state, [action.todoListId]: [] }
        case 'ADD-TASK':{
            const newTask = {id: v1(), title: action.title, isDone : false}
            return {...state, [action.todolistId]: [newTask, ...state[action.todolistId] ]}
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
export const ChangeTaskStatusAC = (todolistId: string, taskId: string, isDone: boolean) => {
    return {
        type: "CHANGE-TASK-STATUS",
        todolistId,
        taskId,
        isDone
    } as const
}

export type AddTaskACType = ReturnType<typeof AddTaskAC>
export const AddTaskAC = (todolistId:string, title:string)=>{
    return{
        type: 'ADD-TASK',
        title,
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