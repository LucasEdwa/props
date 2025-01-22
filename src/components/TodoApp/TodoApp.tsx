import { useState } from 'react';
import { AddTodos } from './AddTodos';
import { ShowTodos } from './ShowTodos';
import { Todo } from '../../models/Todo';

export const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>(JSON.parse(localStorage.getItem('todos') || '[]'));

    const addTodo = (text: string) => {
        setTodos([...todos, new Todo(Date.now(), text)])
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id))
    }
    const toogleTodo = (id: number) => {
        setTodos(todos.map((t) => {
            if (t.id === id) {
                return { ...t, done: !t.done }
            }
            return t;
        }
        ))
    }

    localStorage.setItem('todos', JSON.stringify(todos))
    const handleSort = () => {
        setTodos([
            ...todos.sort((t1, t2) => {
                if (t1.text.toLowerCase() > t2.text.toLowerCase()) return 1;
                if (t1.text.toLowerCase() < t2.text.toLowerCase()) return -1;

                return 0
            })
        ])
    }


    return (<>
        <h1 className='text-2xl text-center p-2'>Todo App</h1>
        <AddTodos addTodo={addTodo} handleSort={handleSort}/>
        <ShowTodos theTodoList={todos} delete={removeTodo} done={toogleTodo}  />
    </>)
}