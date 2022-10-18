import { fetchPatch } from "../util/api";
import { useState } from "react";

const Category = ({list}) => {
    const handleAdd = () => {
        fetchPatch("http://localhost:3001/lists/", list.id, {todo: [...list.todo ,{ text:'입력', check:false }]});
    }

    const [isHovering, setIsHovering] = useState(0);

    return (
        <div className='category' style={{color: list.color}}>
            {list.category}
            <button onMouseOver={() => setIsHovering(1)}
        onMouseOut={() => setIsHovering(0)}onClick={handleAdd} style={isHovering ? {backgroundColor: list.color} : null} className='addTodoBtn'><i className="fa-solid fa-plus"></i></button>
        </div>
    )
}

export default Category;