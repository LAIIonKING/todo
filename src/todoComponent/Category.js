import { fetchPatch } from "../util/api";

const Category = ({list}) => {
    const handleAdd = () => {
        fetchPatch("http://localhost:3001/lists/", list.id, {todo: [...list.todo ,'입력']});
    }
    return (
        <div className='category' style={{color: list.color}}>
            {list.category}
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default Category;