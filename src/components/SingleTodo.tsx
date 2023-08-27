import React from 'react';
import { Todo } from '../model';
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
        </form>
    )
}

export default SingleTodo