import { useState } from "react"

const ColorPick = ({setColor}) => {
    const colors = ['#2EDCBF', '#DC2E2E', '#2E53DC', '#2EDC70', '#732EDC']

    const [colorCheck, setColorCheck] = useState(false)
    const [pastChecktext, setPastChecktext] = useState('');
    const clickBtn = (e) => {
        if(!colorCheck){
            setColor(e.target.name)
            setPastChecktext(e.target.innerText)
            e.target.innerText = 'V'
            setColorCheck(true)
        }else if(e.target.innerText === 'V'){
            e.target.innerText = pastChecktext
            setColorCheck(false)
        }
    }

    return (
        <div className='colorList'>
            {colors.map(cl => (
                <button name={cl} className={`colorCircle ${cl}`} onClick={clickBtn}>{cl}</button>
            ))}
        </div>
    )
}

export default ColorPick;