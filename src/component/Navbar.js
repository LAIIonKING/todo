import React, { useState } from 'react';
import EditModal from '../editComponent/EditModal';
//버튼 누르면 editmodal창이 뜬다

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const clickPencil = () => {
        setIsClick(true)
    }
    return (
        <div>
            <nav className="navbar">
                <h1>To Do List</h1>
                <button onClick={clickPencil}>pencil</button>
            </nav>
            <div>
                {isClick ? <EditModal setIsClick={setIsClick} /> : null}
            </div>
        </div>
    );
}

export default Navbar; 