import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm() {

  const [todoName, setTodoName] = useState('');

  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    if (todoName == 0) {
      alert("error")
    }else{
      dispatch(
        addTodo({
          id: uuidv4(),
          name: todoName,
          completed: false
        }));
      setTodoName("")
    }
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  return (

    <div className='d-flex align-items-center justify-content-center'>
      <Box

        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField value={todoName} onChange={handleInputChange} id="outlined-basic" label="New Task" variant="outlined" />
      </Box>
      <Fab color="primary" aria-label="add" onClick={handleAddButtonClick} >
        <AddIcon />
      </Fab>



    </div>



  )
}
