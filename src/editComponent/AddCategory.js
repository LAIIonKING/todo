import { useState } from "react"
import ColorPick from './ColorPick'
import { fetchCreate } from "../util/api";

const AddCategory = ({setIsClick, setIsClickAdd, setColor, color}) => {

    //backButton
    const clickBack = () => {
        setIsClickAdd(false)
        setIsClick(true)
    }

    //categoryAdd
    const [category, setCategory] = useState(null);
    const inputText = (e) => {
        setCategory(e.target.value)
    }

    //editWrite
    const handleWrite = (e) => {
        //전부 다 값이 있으면 wirte
        if(category && color){
            e.preventDefault();
            const data = {category, color, todo: []}
            fetchCreate("http://localhost:3001/lists/", data)
            setIsClickAdd(false)
            setIsClick(true)
        }else if(!category){
            alert('이름을 입력해주세요')
        }else if(!color){
            alert('색상을 선택해주세요')
        }
    }

    return (
        <div className="addCategory">
            <div className='modalNav'>
                <button className='editClose' onClick={clickBack}><i className="fa-solid fa-chevron-left"></i></button>
                <h2>카테고리 추가</h2>
            </div>
            <input className="addtextInput" type='text' placeholder={'입력'} onChange={inputText}></input>
            <h3>색상</h3>
            <ColorPick setColor={setColor}/>
            <button className='editWrite' onClick={handleWrite}>확인</button>
        </div>
    )
}

export default AddCategory;