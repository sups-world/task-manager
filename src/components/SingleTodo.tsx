import React, { useState, useRef, useEffect } from 'react';
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

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)


    const handleDone = (id: number) => {
        setTodos(todos.map((t) =>
            t.id === id ? { ...t, isDone: !t.isDone } : t))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((t) => t.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, todo: editTodo } : todo
        ));
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])



    return (
        <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>


            {
                edit ? (
                    <input
                        ref={inputRef}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        className='todos__single--text' />
                ) : (

                    todo.isDone ? (
                        <s className="todos__single--text"> {todo.todo}</s>

                    ) : (
                        <span className="todos__single--text"> {todo.todo}</span>

                    )


                )
            }
            <div>
                <span className="icon" onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }
                }>
                    <AiOutlineEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                    <AiOutlineDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)} >
                    <MdOutlineDone />
                </span>


            </div>
        </form >
    )
}

export default SingleTodo