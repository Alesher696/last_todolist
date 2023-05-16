import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './App.css';



type ButtonsFilterPropsType = {
    changeFilter: (filter: string) => void
}

export const ButtonsFilter = (props: ButtonsFilterPropsType) => {

    const [filters,setFilter] = useState('all')


    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        filter: string,
    ) => {
        props.changeFilter(filter)
        setFilter(filter)
    };

    return (
        <div>
            <ToggleButtonGroup
                color="primary"
                value={filters}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="all" className={filters === 'all'? 'buttonActive': ''}>all</ToggleButton>
                <ToggleButton value="active">active</ToggleButton>
                <ToggleButton value="completed">completed</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

