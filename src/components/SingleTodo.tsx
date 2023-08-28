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
    return (
        <form className='todos__single'>
            <span className="todos__single--text"> {todo.todo}</span>
            <div>
                <span className="icon">
                    <AiOutlineEdit />
                </span>
                <span className="icon">
                    <AiOutlineDelete />
                </span>
                <span className="icon">
                    <MdOutlineDone />
                </span>


            </div>
        </form>
    )
}

export default SingleTodo