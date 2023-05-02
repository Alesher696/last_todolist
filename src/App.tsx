import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "./redux/store";
import {
    AddTodolistAC,
    initialStateTodolistType,
} from "./redux/todolistReducer";
import {Todolist} from "./Todolist";
import {AddItem} from "./AddItem";


function App() {

    const todolists = useSelector<storeType, initialStateTodolistType[]>(state => state.todolist)

    const dispatch = useDispatch()

    const addTodolist = (title: string) => {
        dispatch(AddTodolistAC(title))
    }

    const todoLists = todolists.map(tl=> <Todolist key={tl.id} todolist={tl}/>)
    return (
        <div className={'todolists'}>
            <AddItem addItem={addTodolist}/>
            {todoLists}
        </div>
    )
}

export default App;
