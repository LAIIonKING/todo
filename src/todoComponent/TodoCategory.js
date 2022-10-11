import { useState } from "react";
import Category from "./Category";
import Todo from './Todo';

const TodoCategory = ({list}) => {
    // const [] = useState('')
    return (
        <div className='toDoCategory'>
            <Category list={list}/>
            {list.todo.map((text, idx) => (
                    <Todo text={text} list={list} idx={idx}/>
            ))}
            
        </div>
    )
}

export default TodoCategory;