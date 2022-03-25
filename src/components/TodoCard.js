import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, Divider, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InboxIcon from '@mui/icons-material/Inbox';
const TodoCard = () => {
  const [valueTodo, setValueTodo] = useState('');
  const [myTodos, setMyTodos] = useState([]);
  const todoRef = useRef('');

  const handleChange = (e) => {
    const valTodo = e.target.value;
    // console.log(valTodo);
    setValueTodo(valTodo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    const newTodo = todoRef.current.value;
    console.log(newTodo);

    // console.log(valueTodo);
    setMyTodos((todos) => {
      setValueTodo('');
      return [...todos, newTodo];
    });
    console.log(myTodos);
  };

  useEffect(() => {}, []);

  const card = (
    <React.Fragment>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant='h6' component='div'>
          Add Todos Here
        </Typography>
        <Divider />
        <TextField
          id='outlined-textarea'
          label='Add Todo'
          placeholder='Todo'
          onChange={handleChange}
          value={valueTodo}
          inputRef={todoRef}
          required
          multiline
        />
        <CardActions>
          <Button
            variant='contained'
            endIcon={<AddCircleIcon />}
            size='small'
            onClick={handleSubmit}
          >
            Add
          </Button>
        </CardActions>
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm' sx={{ marginTop: '50px' }}>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <Card variant='outlined'>{card}</Card>
        </Box>
      </Container>

      <Container maxWidth='sm' sx={{ marginTop: '50px' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Box
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {myTodos.map((todo) => (
              <List key={todo}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={todo} />
                  </ListItemButton>
                </ListItem>
              </List>
            ))}
          </Box>
          {/* {myTodos.map((todo) => (
            <ul key={todo}>
              <li>{todo}</li>
            </ul>
          ))} */}
        </CardContent>
      </Container>
    </>
  );
};

export default TodoCard;
