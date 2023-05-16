import React, {ChangeEvent} from 'react';
import {EditableSpan} from "./EditableSpan";
import {useTask} from "./hooks/useTask";
import {useAppSelector} from "./hooks/hooks";
import {TaskSelector} from "./redux/selectors";
import {TaskStatuses} from "./api/todolist-api";
import ClearIcon from '@mui/icons-material/Clear';
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';

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


    // if (props.filter === 'active') {
    //     filteredTasks = tasks[props.todolistId].filter(el=> el.status !== TaskStatuses.New)
    // } if(props.filter === 'completed'){
    //     filteredTasks = tasks[props.todolistId].filter(el=> el.status !== TaskStatuses.Completed)
    // } else

    let filteredTasks = tasks[props.todolistId]?.map(t => {

        return (
            <div key={t.id}>
                <Checkbox  checked={!!t.status}
                           onChange={(e) => onChangeHandler(e, t.id)}/>
                <EditableSpan title={t.title} id={t.id} changeTitle={changeTaskTitle}/>
                <Button onClick={() => removeTask(t.id)} color={'primary'}><ClearIcon/></Button>
            </div>
        )
    })
    return (
        <div>
            {filteredTasks}
        </div>
    );
};

