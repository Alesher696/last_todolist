import React, {ChangeEvent, useState} from 'react';


type AddItemType={
    addItem:(title:string)=> void
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
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

