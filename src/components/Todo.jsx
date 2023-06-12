
import { Checkbox } from '@mui/material';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import { Item } from './styleMui'
import { useDispatch } from 'react-redux';
import { deleteTodo, setCompleted } from '../redux/actions';





export default function Todo(props) {

    const { id, name, completed } = props.item;
    const [checked, setChecked] = useState(completed);
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }

    const handleChange = (event) => {
        setChecked(event.target.checked);
        dispatch(setCompleted(id))
    };




    return (
        <div>
            <Item style={{marginBottom:"10px"}}>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }} />
                <span style={checked === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                    {name}
                </span>


                <Button onClick={handleDelete} className='float-end ' variant="contained" color="error" startIcon={<DeleteIcon />}>
                    Delete
                </Button>


            </Item>
        </div>
    )
}
