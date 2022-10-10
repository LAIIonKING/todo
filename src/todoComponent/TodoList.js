import TodoCategory from "./TodoCategory";

const TodoList = ({lists}) => {
    return (
        <div className='toDo-list'>
            {lists && lists.map(list => (
                <div className='todoCategory'>
                    <TodoCategory list={list}/>
                </div>
            ))}
        </div>
    );
}

export default TodoList;