import React, {useEffect} from 'react';
import './App.css';
import {AddTodolistTC, GetTodolistTC,} from "./redux/todolistReducer";
import {Todolist} from "./Todolist";
import {AddItem} from "./AddItem";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {TodolistSelector} from "./redux/selectors";


function App() {

    const todolists = useAppSelector(TodolistSelector)
    const dispatch = useAppDispatch()

    const addTodolist = (title: string) => {
        dispatch(AddTodolistTC(title))
    }

    useEffect(()=>{
        dispatch(GetTodolistTC())
    },[])

    return (
        <div className={'todolists'}>
            <AddItem addItem={addTodolist}/>
            {todolists.map(tl=> {return <Todolist key={tl.id} todolist={tl}/>})}
        </div>
    )
}

export default App;
