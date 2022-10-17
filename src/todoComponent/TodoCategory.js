import { useState } from "react";
import Category from "./Category";
import Todo from './Todo';

const TodoCategory = ({list}) => {
    // const [] = useState('')
    return (
        <div className='toDoCategory'>
            <Category list={list}/>
            {list.todo.map((todo, idx) => (
                    <Todo todo={todo} list={list} idx={idx} key={idx}/>
            ))}
            
        </div>
    )
}

export default TodoCategory;