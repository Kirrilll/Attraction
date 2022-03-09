import React from 'react';
import './sceneTitle.css'

interface ISceneTitleProp {
    back: () => void,
    title: string,
    subtitle: string,
    location: string
}

const BACK_ICON_PATH = '/assets/sprites/icons/back_icon.png';

const SceneTitle: React.FC<ISceneTitleProp> = (props) => {
    const { back, title, subtitle, location } = props;

    return (
        <div className='attraction'>
            <button className = 'back-btn' onClick={back}>
                <img src={`${process.env.PUBLIC_URL}` + BACK_ICON_PATH} />
            </button>
            <div className = 'attraction__info info'>
                <div className = 'info__title'>{title}</div>
                <div className = 'info__subtitle'>{subtitle}</div>
                <div className = 'info__location'>{location}</div>
            </div>
        </div>
    )
}

export default SceneTitle;