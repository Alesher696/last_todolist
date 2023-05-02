import React from 'react';
import {AddItem} from "./AddItem";
import {initialStateTodolistType,} from "./redux/todolistReducer";
import {Tasks} from "./Tasks";
import {ButtonsFilter} from "./ButtonsFilter";
import {EditableSpan} from "./EditableSpan";
import {useTodolist} from "./hooks/useTodolist";


export type TodolistProps = {
    todolist: initialStateTodolistType
}


export const Todolist = ({todolist}: TodolistProps) => {

    const {id, title, filter} = todolist

    const {
        addTask,
        removeTodoList,
        changeFilter,
        changeTodoTitle
    } = useTodolist(id, title, filter)

    return (
        <div className={'todolist'}>
            <EditableSpan title={title} changeTitle={changeTodoTitle} id={id}/>
            <button onClick={removeTodoList}>X</button>
            <AddItem addItem={addTask}/>
            <Tasks todolistId={id} filter={filter}/>
            <ButtonsFilter changeFilter={changeFilter}/>
        </div>
    );
};

