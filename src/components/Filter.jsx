import React, { useState } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './styleMui';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { filterStatusChange, searchFilterChange } from '../redux/actions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



export default function Filter() {
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const dispatch = useDispatch();
  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    dispatch(searchFilterChange(e.target.value))
  }

  const handleFilterStatus = (e) => {
    setFilterStatus(e.target.value)
    dispatch(filterStatusChange(e.target.value))
    
  }



  return (
    <div >
      <Search style={{ width: "100%" }}>
        <SearchIconWrapper >
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          style={{ width: "100%" }}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Search>
      <FormControl className='m-3' >
        <RadioGroup value={filterStatus} onChange={handleFilterStatus} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
          <FormControlLabel value="All" control={<Radio />} label="All" />
          <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
          <FormControlLabel value="Todo" control={<Radio />} label="Todo" />

        </RadioGroup>
      </FormControl>
    </div>
  )
}
