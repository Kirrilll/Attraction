import { randomInt } from 'crypto';
import React from 'react';
import './loadingIndicator.css'

const MAX_CATS_IMG = 2

const LoadingIndicator: React.FC = () => {

    const catPath:string = `/assets/sprites/cats/cat${Math.floor(1 + Math.random() * (MAX_CATS_IMG))}.png`

    return (
        <div className = 'loading'>
            <div className = 'loading__wrapper'>
                <img className = 'loading__img' src = {`${process.env.PUBLIC_URL}` + catPath}/>
                <div className = 'loading__text'>Пока мы загружаем 3д модель, полюбуйтесь на этого котика =)</div>
            </div>
        </div>
    )
}

export default LoadingIndicator