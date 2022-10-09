import React, { useState } from 'react';
//버튼 누르면 editmodal창이 뜬다

const Navbar = () => {
    const [isClick, setIsClick] = useState(false);

    const clickPencil = () => {
        setIsClick(true)
    }
    return (
        <nav className="navbar">
            <h1>To Do List</h1>
            <button onClick={clickPencil}>pencil</button>
        </nav>
    );
}

export default Navbar; 