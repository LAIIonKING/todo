import Category from "./Category";

const TodoCategory = ({list}) => {
    return (
        <div className='toDoCategory'>
            <Category list={list}/>
            {/* <Todo/> */}
        </div>
    )
}

export default TodoCategory;