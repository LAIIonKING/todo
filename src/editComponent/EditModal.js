import EditCategoryList from './EditCategoryList'

const EditModal = ({lists, setIsClick, setIsClickAdd, setIsClickDlt, setEditId}) => {

    const clickClose = () => {
        setIsClick(false)
    }

    const clickAdd = () => {
        setIsClickAdd(true)
        setIsClick(false)
    }

    const clickDelet = (e) => {
        setIsClick(false);
        setIsClickDlt(true);
        setEditId(e.target.name)
    }
    

    return (
        <div className='editModal'>
            <button className='editClose' onClick={clickClose}>x</button>
            <button className='addButton' onClick={clickAdd}>+</button>
            <EditCategoryList lists={lists} clickDelet={clickDelet} setEditId={setEditId}/>
            <button className='editWrite' onClick={clickClose}>확인</button>
        </div>
    )
}

export default EditModal;