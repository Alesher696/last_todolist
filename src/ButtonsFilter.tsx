import React, {useState} from 'react';
import './App.css';



type ButtonsFilterPropsType = {
    changeFilter: (filter: string) => void
}

export const ButtonsFilter = (props: ButtonsFilterPropsType) => {

    const [filters,setFilter] = useState('all')

    const onClickHandler = (filter: string) => {
        props.changeFilter(filter)
        setFilter(filter)
    }



    return (
        <div>
            <button onClick={() => onClickHandler('all')} className={filters === 'all'? 'buttonActive': ''}>all</button>
            <button onClick={() => onClickHandler('active')}className={filters === 'active'? 'buttonActive': ''}>active</button>
            <button onClick={() => onClickHandler('completed')} className={filters === 'completed'? 'buttonActive': ''}>completed</button>
        </div>
    );
};

