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
                <div className="loading__spinner-wrap">
                    <div className="loading__spinner">
                        <div className="spinner__body"></div>
                        <div className="spinner__shadow"></div>
                    </div>
                    <div className="loading__spinner">
                        <div className="spinner__body"></div>
                        <div className="spinner__shadow"></div>
                    </div>
                    <div className="loading__spinner">
                        <div className="spinner__body"></div>
                        <div className="spinner__shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingIndicator