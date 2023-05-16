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
    const {id, title, filter, entityStatus} = todolist
    const {
        addTask,
        removeTodoList,
        changeFilter,
        changeTodoTitle
    } = useTodolist(id, title, filter)
    return (
        <div className={'todolist'}>
            <EditableSpan title={title} changeTitle={changeTodoTitle} id={id}/>
            <button onClick={removeTodoList} disabled={entityStatus === 'loading'}>X</button>
            <AddItem addItem={addTask} disabled={entityStatus === 'loading'}/>
            <Tasks todolistId={id} filter={filter}/>
            <ButtonsFilter changeFilter={changeFilter}/>
        </div>
    );
};

