import React from 'react';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';

const ToDo = ({ addTodos }: { addTodos: (text: string) => void }) => {

    const [todo, setTodo] = React.useState<string>("");
    const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!todo) {
            alert("Please enter a todo");
        } else {
            addTodos(todo);
            setTodo("");
        }
    };

    return (
        <div className="AddTodo">

            <h2 >Add your ToDo Item Here..</h2>
            <form>
                <TextField id="filled-basic" label="Type ToDo Name" variant="filled" value={todo}
                    onChange={e => { setTodo(e.target.value) }} />
                <Button size="large" onClick={submit} variant="contained">Add</Button>

            </form>


        </div>
    );
};

export default ToDo;