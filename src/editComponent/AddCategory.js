import { useState } from "react"
import ColorPick from './ColorPick'
import { fetchCreate } from "../util/api";

const AddCategory = ({setIsClick, setIsClickAdd}) => {

    //backButton
    const clickBack = () => {
        setIsClickAdd(false)
        setIsClick(true)
    }

    //categoryAdd
    const [category, setCategory] = useState('');
    const inputText = (e) => {
        setCategory(e.target.value)
    }

    //color
    const [color, setColor] = useState('')

    //editWrite
    const handleWrite = (e) => {
        //전부 다 값이 있으면 wirte
        e.preventDefault();
        const data = {category, color, todo: {}}
        fetchCreate("http://localhost:3001/lists/", data)
        setIsClickAdd(false)
        setIsClick(true)
    }

    return (
        <div className="addCategory">
            <h2>카테고리 추가</h2>
            <button className='backBtn' onClick={clickBack}>back</button>
            <input type='text' placeholder={'입력'} onChange={inputText}></input>
            <h3>색상</h3>
            <ColorPick setColor={setColor}/>
            <button className='editWrite' onClick={handleWrite}>확인</button>
        </div>
    )
}

export default AddCategory;