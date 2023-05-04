import axios from "axios";


export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number

}


export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3

}

export enum TaskPriority{
    Low,
    Middle,
    Hi,
    Urgently,
    Later
}
export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriority
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type ResponseType<T> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: T
}

const Instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        'API-KEY': '814d3cf1-9151-4829-ad9e-c7f2b77f0f6c'
    }
})

export const TodolistAPI = {

    getTodolist() {
        return Instanse.get<TodolistType[]>(`todo-lists`)
    },
    addTodolist(title: string) {
        return Instanse.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title})
    },
    deleteTodolist(todolistId: string) {
        return Instanse.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
    },
    updateTodoList(todolistId: string, title: string) {
        return Instanse.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title})
    }
}

export const TasksAPI = {
    getTasks(todolistId: string) {
        return Instanse.get(`todo-lists/${todolistId}/tasks`)
    },
    addTask(todolistId: string, title: string) {
        return Instanse.post(`todo-lists/${todolistId}/tasks`, {title})
    },
    updateTask(todolistId: string, taskId: string, title: string) {
        return Instanse.put(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    },
    updateTaskStatus(todolistId: string, taskId: string, status: TaskStatuses){
      return Instanse.put(`todo-lists/${todolistId}/tasks/${taskId}`, {status})
    },

    deleteTask(todolistId: string, taskId: string) {
        return Instanse.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    }
}