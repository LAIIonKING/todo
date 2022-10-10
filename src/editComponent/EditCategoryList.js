const EditCategoryList = ({lists}) => {
    return (
        <div className='editCategoryList'>
            {lists && lists.map(list => (
                <div className='editCategory'>
                    <h3 style={{color: list.color}}>{list.category}</h3>
                    <button className='categoryEdit'>...</button>
                </div>
            ))}
        </div>
    )
}

export default EditCategoryList;