import { useState } from "react"

const ColorPick = ({setColor}) => {
    const colors = ['#FBB2C9', '#FF92B4', '#FE6B9A', '#EA737F', '#F44E5D', '#CB2E47', 
        '#FACF34', '#FF8F08', '#EB692B','#C6D458', '#97BB8D', '#608C4D',
        '#0FDF8F', '#00C0A7', '#04A7A7','#42D9E7', '#64C3C9', '#71A2DB',
        '#1CA6EB', '#0076FF', '#2957AA','#6236FE', '#4B13FF', '#756F84']

    const [colorCheck, setColorCheck] = useState(false);

    const clickBtn = (e) => {
        if(!colorCheck && e.target.className === 'colorCircle'){
            setColor(e.target.name);
            e.target.className = 'colorCircle colorBorder';
            setColorCheck(true);
        }else if(e.target.className === 'colorCircle colorBorder' && colorCheck){
            e.target.className = 'colorCircle';
            setColorCheck(false);
        }
    }

    return (
        <div className='colorList'>
            {colors.map((cl, idx) => (
                <button name={cl} className='colorCircle' onClick={clickBtn} style={{backgroundColor: cl}} key={idx}></button>
            ))}
        </div>
    )
}

export default ColorPick;