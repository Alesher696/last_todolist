import React, {useEffect} from 'react';
import './App.css';
import {AddTodolistTC, GetTodolistTC,} from "./redux/todolistReducer";
import {Todolist} from "./Todolist";
import {AddItem} from "./AddItem";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {appSelector, TodolistSelector} from "./redux/selectors";
import {LoadingBar} from "./components/LoadingBar";
import {NavBar} from "./components/NavBar";
import {ErrorBar} from "./components/ErrorBar";

function App() {
    const todolists = useAppSelector(TodolistSelector)
    const app = useAppSelector(appSelector)
    const dispatch = useAppDispatch()

    const addTodolist = (title: string) => {
        dispatch(AddTodolistTC(title))
    }

    useEffect(() => {
        dispatch(GetTodolistTC())
    }, [])
    return (
        <div className={'app'}>
            <NavBar/>
            {app.status === "loading" && <LoadingBar/>}
            <br/>
            <AddItem addItem={addTodolist} disabled={false}/>
            <div className={'todolists'}>
                {todolists.map(tl => {
                    return <Todolist key={tl.id} todolist={tl}/>
                })}
            </div>

            <ErrorBar/>
        </div>
    )
}

export default App;


