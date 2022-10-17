import React, { useState } from 'react';
import AddCategory from '../editComponent/AddCategory';
import DeleteCategory from '../editComponent/DeleteCategory';
import EditModal from '../editComponent/EditModal';
//버튼 누르면 editmodal창이 뜬다

const Navbar = ({lists}) => {
    const [isClick, setIsClick] = useState(false);
    const [isClickAdd, setIsClickAdd] = useState(false);
    const [isClickDlt, setIsClickDlt] = useState(false);
    const [editId, setEditId] = useState('')
    const [color, setColor] = useState(null)
    const [isClickMo, setIsClickMo] = useState(false);

    const clickPencil = () => {
        setIsClick(true);
        setIsClickMo(true);
    }
    return (
        <div>
            <nav className="navbar">
                <h1>To Do List</h1>
                <button onClick={clickPencil} className="pencil"><i className="fa-regular fa-pen-to-square"></i></button>
            </nav>
            <div className='line'></div>
            <div className={isClickMo ? 'modal' : null}>
                {isClick ? <EditModal lists={lists} setIsClick={setIsClick} setIsClickAdd={setIsClickAdd} setIsClickDlt={setIsClickDlt} setEditId={setEditId} setIsClickMo={setIsClickMo}/> : null}
                {isClickAdd ? <AddCategory setIsClick={setIsClick} setIsClickAdd={setIsClickAdd} setColor={setColor} color={color}/> : null}
                {isClickDlt ? <DeleteCategory lists={lists} setIsClick={setIsClick} setIsClickDlt={setIsClickDlt} editId={editId} setColor={setColor} color={color}/> : null}
            </div>
        </div>
    );
}

export default Navbar; 