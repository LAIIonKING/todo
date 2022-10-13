import { fetchPatch } from "../util/api";

const Category = ({list}) => {
    const handleAdd = () => {
        fetchPatch("http://localhost:3001/lists/", list.id, {todo: [...list.todo ,{ text:'입력', check:false }]});
    }
    return (
        <div className='category' style={{color: list.color}}>
            {list.category}
            <button onClick={handleAdd} className='addTodoBtn'><i class="fa-solid fa-plus"></i></button>
        </div>
    )
}

export default Category;