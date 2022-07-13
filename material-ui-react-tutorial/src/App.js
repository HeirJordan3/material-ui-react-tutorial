import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import TextField from '@mui/material/TextField';





function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <ButtonGroup variant="contained" color='primary' >
      <Button 
      startIcon={<SaveIcon/>}
      onClick={()=> alert('File Saved')} 
      >Save
      </Button>
      <Button 
      startIcon={<DeleteIcon/>}
      size='large'
      onClick={()=> alert('Are you sure you want to delete?')}
      > Discard
      </Button>
      </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      
    
      </header>
      <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
    </div>
  );
}

export default App;
