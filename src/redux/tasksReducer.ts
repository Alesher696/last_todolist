import {v1} from "uuid";
import {todolistId1, todolistId2} from "./todolistReducer";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type initialStateTaskType = {
    [key: string]: TaskType[]
}

type ActionType = changeTaskStatusACType
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
        default:
            return state
    }
}
type changeTaskStatusACType = ReturnType<typeof ChangeTaskStatusAC>
export const ChangeTaskStatusAC = (todolistId: string, taskId: string, isDone: boolean) => {
    return {
        type: "CHANGE-TASK-STATUS",
        todolistId,
        taskId,
        isDone
    } as const
}