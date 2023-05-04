import {storeType} from "./store";

export const TodolistSelector=(state:storeType) => state.todolist
export const TaskSelector=(state:storeType) => state.tasks