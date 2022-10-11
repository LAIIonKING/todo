import { useState } from "react";
import { fetchPatch } from "../util/api";

const Todo = ({text, list, idx}) => {
    const [todoText, setTodoText] = useState(text)
    const editTodo = (e) => {
        e.preventDefault();
        setTodoText(e.target.value)
    }
    const editCom = () => {
        let data = list.todo.slice();
        data[idx] = todoText;
        fetchPatch("http://localhost:3001/lists/", list.id, {todo: data});
    }

    const deletTodo = () => {
        let result = window.confirm('정말 삭제하시겠습니까?');
        if(result === true){
            let dataDlt = list.todo.filter((el, index) => {
                return idx !== index
            });
            fetchPatch("http://localhost:3001/lists/", list.id, {todo: dataDlt});
        }else{
            return false;
        }
    }
    return (
        <div className="todo">
            <input type='checkbox'></input>
            <input type='text' value={todoText} onChange={editTodo} onBlur={editCom}></input>
            <button onClick={deletTodo}>Dlt</button>
        </div>
    )
}

export default Todo;