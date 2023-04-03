import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "./redux/store";
import {ChangeTodolistFilterAC, initialStateTodolistType} from "./redux/todolistReducer";
import {Todolist} from "./Todolist";
import {ChangeTaskStatusAC, initialStateTaskType, tasksReducer, TaskType} from "./redux/tasksReducer";


function App() {

    const todolists = useSelector<storeType, initialStateTodolistType[]>(state => state.todolist)
    const tasks = useSelector<storeType, initialStateTaskType>(state => state.tasks)
    const dispatch = useDispatch()

//commit
    const changeFilter = (todolistId:string, filter:string)=>{
        dispatch(ChangeTodolistFilterAC(todolistId, filter))
    }
    const changeTaskStatus =(todolistId:string,taskId:string, isDone: boolean)=>{
        dispatch(ChangeTaskStatusAC(todolistId, taskId, isDone))
    }

    return (
        <div className={'todolists'}>
            {todolists.map(tl => {
                let allTodolistTasks = tasks[tl.id];
                let tasksForTodolist = allTodolistTasks;

                if (tl.filter === "active") {
                    tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                }
                if (tl.filter === "completed") {
                    tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                }
                return(
                <Todolist  key={tl.id} todolistId={tl.id} todolistFilter={tl.filter} todolistTitle={tl.title} tasks={tasksForTodolist} changeFilter={changeFilter} changeTaskStatus={changeTaskStatus}/>
            )})}
        </div>
    )
}
    export default App;
