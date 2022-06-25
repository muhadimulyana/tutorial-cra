import React from "react";
import './Todo.css';

function Todo() {
    const [activity, setActivity] = React.useState('');
    const [todos, setTodos] = React.useState([])
    const [edit, setEdit] = React.useState({})
    const [message, setMessage] = React.useState('');

    function generateId() {
        return Date.now();
    }

    function saveTodoHandler(e) {
        e.preventDefault();

        if(!activity) {
            return setMessage('Aktifitas tidak boleh kosong');
        }

        setMessage('')

        if(edit.id) {
            const updatedTodo = {
                id: edit.id,
                activity
            }

            const editTodoIndex = todos.findIndex(function(todo) {
                return todo.id === edit.id;
            })

            const updatedTodos = [
                ...todos
            ];
            
            updatedTodos[editTodoIndex] = updatedTodo;

            setActivity('');
            setTodos(updatedTodos);

            return cancelEditHandler();
        }

        setTodos([...todos, {
            id: generateId(),
            activity
        }])
        setActivity('');
    }

    function removeTodoHandler(todoId) {
        const filteredTodos = todos.filter(function(todo) {
            return todo.id !== todoId;
        })

        setTodos(filteredTodos)
        if(edit.id) cancelEditHandler();
    }

    function editTodoHandler(todo) {
        setActivity(todo.activity)
        setEdit(todo);
    }

    function cancelEditHandler() {
        setEdit({});
        setActivity('');
    }

    function doneTodoHandler(todo) {
        const updatedTodo = {
            ...todo,
            done: todo.done ? false : true
        }

        const editTodoIndex = todos.findIndex(function (currentTodo) {
            return currentTodo.id === todo.id;
        })

        const updatedTodos = [
            ...todos
        ];
        
        updatedTodos[editTodoIndex] = updatedTodo;

        setTodos(updatedTodos)
    }

    return (
        <>
            <h1>Todo List App</h1>
            {message && <small style={{ color: 'red'}}>{message}</small>}
            <form onSubmit={saveTodoHandler}>
                <input type="text" placeholder="Nama Aktifitas"
                value={activity}
                    onChange={function (e) {
                        setActivity(e.target.value);
                    }}
                />
                <button type="submit">
                    {edit.id ? 'Update' : 'Save'}
                </button>
                {edit.id && <button onClick={cancelEditHandler}>Cancel</button>}
            </form>
            {todos.length > 0 ? (
                <ul>
                    {todos.map(function(todo) {
                        return (
                            <li key={todo.id}>
                                <input type="checkbox" onChange={doneTodoHandler.bind(this, todo)} />
                            <span class={todo.done ? 'done' : ''}>{todo.activity}</span>
                            <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                            <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
                            </li>
                        ) 
                    })}
                </ul>
            ) : (
                <p><i>Todo is empty</i></p>
            )
            }
        </>
    )
}

export default Todo;