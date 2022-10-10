const Category = ({list}) => {
    return (
        <div className='category' style={{color: list.color}}>
            {list.category}
            <button>+</button>
        </div>
    )
}

export default Category;