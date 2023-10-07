import { FC, useState } from 'react';

import './index.css';

export const Header: FC = () => {
    const [scaling, setScaling] = useState<number>(100);

    const handleChangeScaling = (e: any) => {
        setScaling(e.target.value)
    }


    return (
        <header className='Header'>
            <div className='Nav-list'>
                <p>Services </p>
                <div className='Action-list'>
                    <button type='button' className='Button-action'>LIST VIEW</button>
                    <button type='button' className='Button-action' onClick={() => window.scrollTo(window.screen.availWidth*0.3,window.screen.availHeight*1.2)}>Compass</button>
                    <div className='Scaling-container'>
                        <button type='button' className='Button-action'>-</button>
                        <select value={scaling} id="select-scaling" className='Button-action' onChange={(e)=> handleChangeScaling(e)}>
                            <option value="25">25%</option>
                            <option value="30">30%</option>
                            <option value="40">40%</option>
                            <option value="50">50%</option>
                            <option value="60">60%</option>
                            <option value="70">70%</option>
                            <option value="80">80%</option>
                            <option value="90">90%</option>
                            <option value="100">100%</option>
                            <option value="125">125%</option>
                            <option value="150">150%</option>
                        </select>
                        <button type='button' className='Button-action'>+</button>
                    </div>
                </div>
            </div>
        </header>
    )
}