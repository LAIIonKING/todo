const EditCategoryList = ({lists, clickDelet}) => {
    return (
        <div className='editCategoryList'>
            {lists && lists.map(list => (
                <div className='editCategory'>
                    <h3 style={{color: list.color}}>{list.category}</h3>
                    <button className='categoryEdit' onClick={clickDelet} name={list.id}>...</button>
                </div>
            ))}
        </div>
    )
}

export default EditCategoryList;