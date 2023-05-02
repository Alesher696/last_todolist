import React from 'react';
import {EditableSpan} from "./EditableSpan";
import {TaskType} from "./redux/tasksReducer";
import {useSelector} from "react-redux";
import {storeType} from "./redux/store";
import {useTask} from "./hooks/useTask";


export type TasksPropsType = {
    todolistId: string
    filter: string
}
export const Tasks = (props: TasksPropsType) => {

    const {
        changeTaskTitle,
        onChangeHandler,
        removeTask
    } = useTask(props)

    let tasks = useSelector<storeType, TaskType[]>(state => state.tasks[props.todolistId])

    if (props.filter === "active") {
        tasks = tasks.filter(t => !t.isDone);
    }
    if (props.filter === "completed") {
        tasks = tasks.filter(t => t.isDone);
    }

    const taskLists = tasks.map(t => {
        return (
            <div>
                <input type={'checkbox'} checked={t.isDone} onChange={(e) => onChangeHandler(e, t.id)}/>
                <EditableSpan title={t.title} id={t.id} changeTitle={changeTaskTitle}/>
                <button onClick={() => removeTask(t.id)}>X</button>
            </div>
        )
    })
    return (
        <div>
            {taskLists}
        </div>
    );
};

