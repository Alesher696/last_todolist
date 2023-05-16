import React, {ChangeEvent, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
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
        <div className={'Btn'}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '200px', displayPrint: 'inline'},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                    value={title}
                    onChange={onChangeHandler}
                />
            </Box>
            <Button onClick={onClickHandler} disabled={props.disabled} ><AddIcon /></Button>
        </div>

    );
};

