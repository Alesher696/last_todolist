import React, {ChangeEvent} from 'react';
import {EditableSpan} from "./EditableSpan";
import {useTask} from "./hooks/useTask";
import {useAppSelector} from "./hooks/hooks";
import {TaskSelector} from "./redux/selectors";
import {TaskStatuses} from "./api/todolist-api";


export type TasksPropsType = {
    todolistId: string
    filter: string
}
export const Tasks = (props: TasksPropsType) => {

    const {
        changeTaskTitle,
        changeTaskStatus,
        removeTask
    } = useTask(props)

    let tasks = useAppSelector(TaskSelector)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>, taskId: string) => {
        changeTaskStatus(props.todolistId, taskId, e.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New)
    }

    const taskLists = tasks[props.todolistId]?.map(t => {

        return (
            <div key={t.id}>
                <input type={'checkbox'} checked={!!t.status}
                       onChange={(e) => onChangeHandler(e, t.id)}/>
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

