import EditCategoryList from './EditCategoryList'

const EditModal = ({lists, setIsClick, setIsClickAdd, setIsClickDlt, setEditId, setIsClickMo}) => {

    const clickClose = () => {
        setIsClick(false)
        setIsClickMo(false)
    }

    const clickAdd = () => {
        setIsClickAdd(true)
        setIsClick(false)
    }

    const clickDelet = (e) => {
        setIsClick(false);
        setIsClickDlt(true);
        setEditId(e.target.name)
        console.log(e.target.getAttribute("name"))
    }
    

    return (
        <div className='editModal'>
            <div className='modalNav'>
                <button className='editClose' onClick={clickClose}><i className="fa-solid fa-chevron-left"></i></button>
                <h2>카테고리 편집</h2>
                <button className='addButton' onClick={clickAdd}><i className="fa-solid fa-plus"></i></button>
            </div>
            <EditCategoryList lists={lists} clickDelet={clickDelet} setEditId={setEditId}/>
            <button className='editWrite' onClick={clickClose}>확인</button>
        </div>
    )
}

export default EditModal;