import { useState } from "react";
import { fetchPatch } from "../util/api";

const Todo = ({todo, list, idx}) => {
    const [todoText, setTodoText] = useState(todo.text)
    const editTodo = (e) => {
        e.preventDefault();
        setTodoText(e.target.value)
    }
    const editCom = () => {
        let data = list.todo.slice();
        data[idx].text = todoText;
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

    //checkbox
    const handleCheck = () => {
        if(!todo.check){
            let dataT = list.todo.slice();
            dataT[idx].check = true;
            fetchPatch("http://localhost:3001/lists/", list.id, {todo: dataT});
        }
        else if(todo.check){
            let dataF = list.todo.slice();
            dataF[idx].check = false;
            fetchPatch("http://localhost:3001/lists/", list.id, {todo: dataF});
        }
    }

    return (
        <div className="todo">
            {todo.check ? 
                <button className="checkbox checked" style={{backgroundColor: list.color}} onClick={handleCheck}><i className="fa-solid fa-check"></i></button>
                : 
                <button className="checkbox noncheck" onClick={handleCheck}>{ }</button>
            }
            <input className='todoInput' type='text' value={todoText} onChange={editTodo} onBlur={editCom}></input>
            <button className="todoDlt" onClick={deletTodo}><i className="fa-solid fa-minus"></i></button>
        </div>
    )
}

export default Todo;