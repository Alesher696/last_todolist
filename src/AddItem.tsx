import React, {ChangeEvent, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css';

type AddItemType={
    addItem:(title:string)=> void
    disabled: boolean
}

export const AddItem = (props:AddItemType) => {
const [title,setTitle] = useState('')
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }
    const onClickHandler=()=>{
        props.addItem(title)
        setTitle('')
    }
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '200px', displayPrint: 'inline'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={title} onChange={onChangeHandler} />
            </Box>
            <button onClick={onClickHandler} className={'Btn'} disabled={props.disabled}>+</button>
        </div>

    );
};

