import { useState } from 'react'
import AddCategory from './AddCategory'
import DeleteCategory from './DeleteCategory'
import EditCategoryList from './EditCategoryList'

const EditModal = ({lists, setIsClick, setIsClickAdd}) => {
    

    const clickClose = () => {
        setIsClick(false)
    }

    const clickAdd = () => {
        setIsClickAdd(true)
        setIsClick(false)
    }

    return (
        <div className='editModal'>
            <button className='editClose' onClick={clickClose}>x</button>
            <button className='addButton' onClick={clickAdd}>+</button>
            <EditCategoryList lists={lists}/>
            <button className='editWrite' onClick={clickClose}>확인</button>
        </div>
    )
}

export default EditModal;