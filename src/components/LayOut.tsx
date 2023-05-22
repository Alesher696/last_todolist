import React, {useEffect} from 'react';
import {NavBar} from "./NavBar";
import {LoadingBar} from "./LoadingBar";
import {AddItem} from "../AddItem";
import {Todolist} from "../Todolist";
import {ErrorBar} from "./ErrorBar";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {appSelector, authSelector, TodolistSelector} from "../redux/selectors";
import {AddTodolistTC, GetTodolistTC} from "../redux/todolistReducer";
import '../App.css'
import {Navigate} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";


export const LayOut = () => {

    const todolists = useAppSelector(TodolistSelector)
    const app = useAppSelector(appSelector)
    const auth = useAppSelector(authSelector)
    const dispatch = useAppDispatch()

    const addTodolist = (title: string) => {
        dispatch(AddTodolistTC(title))
    }

    useEffect(() => {
        if (!auth.isLoggedIn) {
            return
        }
        dispatch(GetTodolistTC())
    }, [])


    if (!auth.isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={'app'}>
            {/*<Loader/>*/}
            <NavBar/>
            {app.status === "loading" && <LoadingBar/>}
            <br/>
            <AddItem addItem={addTodolist} disabled={false}/>
            <TransitionGroup className={'todolists'}>
                {todolists.map((tl, index) => {
                    return <CSSTransition key={tl.id}
                                          timeout={500}
                                          classNames='todoStyle'
                    >
                        <Todolist key={tl.id} todolist={tl}/>
                    </CSSTransition>
                })}
            </TransitionGroup>
            <ErrorBar/>
        </div>
    );
};

