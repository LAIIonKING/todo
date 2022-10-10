import React, { useState } from 'react';
import AddCategory from '../editComponent/AddCategory';
import EditModal from '../editComponent/EditModal';
//버튼 누르면 editmodal창이 뜬다

const Navbar = ({lists}) => {
    const [isClick, setIsClick] = useState(false);
    const [isClickAdd, setIsClickAdd] = useState(false);

    const clickPencil = () => {
        setIsClick(true)
    }
    return (
        <div>
            <nav className="navbar">
                <h1>To Do List</h1>
                <button onClick={clickPencil}>pencil</button>
            </nav>
            <div className='modal'>
                {isClick ? <EditModal lists={lists} setIsClick={setIsClick} setIsClickAdd={setIsClickAdd} /> : null}
                {isClickAdd ? <AddCategory setIsClick={setIsClick} setIsClickAdd={setIsClickAdd}/> : null}
            </div>
        </div>
    );
}

export default Navbar; 