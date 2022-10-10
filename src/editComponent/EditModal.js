import AddCategory from './AddCategory'
import DeleteCategory from './DeleteCategory'

const EditModal = ({setIsClick}) => {
    const clickClose = () => {
        setIsClick(false)
    }

    return (
        <div className='editModal'>
            <button className='editClose' onClick={clickClose}>x</button>
            <AddCategory/>
            <DeleteCategory/>
            <button className='editWrite'>확인</button>
        </div>
    )
}

export default EditModal;