import React from 'react';
import { Todo } from '../model';

import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'
import "./styles.css";
// type has equals but interface does not
type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {


    const handleDone = (id: number) => {
        setTodos(todos.map((t) =>
            t.id === id ? { ...t, isDone: !t.isDone } : t))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id));
    }

    return (
        <form className='todos__single'>
            {
                todo.isDone ? (
                    <s className="todos__single--text"> {todo.todo}</s>

                ) : (
                    <span className="todos__single--text"> {todo.todo}</span>

                )

            }
            <div>
                <span className="icon">
                    <AiOutlineEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiOutlineDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)} >
                    <MdOutlineDone />
                </span>


            </div>
        </form>
    )
}

export default SingleTodo