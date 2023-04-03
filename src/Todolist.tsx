import React, {ChangeEvent} from 'react';

import {TaskType} from "./redux/tasksReducer";

type TodolistProps = {
    todolistId: string
    todolistFilter: string
    todolistTitle: string
    tasks: TaskType[]
    changeFilter: (todolistId:string, filter: string) => void
    changeTaskStatus: (todolistId:string,taskId:string, isDone: boolean)=> void
}

export const Todolist = (props: TodolistProps) => {

    const onClickHandler = (filter: string) => {
        props.changeFilter(props.todolistId,filter)
    }


    const tasklist = props.tasks.map(t => {

        const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
            props.changeTaskStatus(props.todolistId, t.id, e.currentTarget.checked)
        }

        return (
            <div key={t.id}>
                <input type={'checkbox'} checked={t.isDone} onChange={onChangeHandler}/>
                <span>{t.title}</span>
                <button>X</button>
            </div>

        )
    })

    return (
        <div className={'todolist'}>
            <div>{props.todolistTitle}</div>
            <input/>
            <button>+</button>
            {tasklist}
            <button onClick={() => onClickHandler('all')}>all</button>
            <button onClick={() => onClickHandler('active')}>active</button>
            <button onClick={() => onClickHandler('completed')}>completed</button>
        </div>
    );
};

