import { Html } from '@react-three/drei';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { PopupInfoType } from '../../../types';
import './popup.css'

interface IPopupProp {
    title: string,
    content: string,
    type: PopupInfoType
}


const Popup: React.FC<IPopupProp> = (props) => {

    const [isActive, setIsActive] = useState<Boolean>(false);

    const iconPath = () => {
        switch (props.type) {
            case PopupInfoType.BUILDING:
                return 'assets/sprites/icons/building_icon.png'
        }
    };

    const active = isActive ? 'active' : '';


    return (
        <Html occlude transform>
            <div className={`popup-title ${active}`} onClick={() => setIsActive(true)}>
                <img src={`${process.env.PUBLIC_URL}` + iconPath()} />
                <div className={`popup-title__text ${active}`}>{props.title}</div>
                <div className={`popup__body ${active}`}>
                    {props.content}
                </div>
            </div>



        </Html>
    )
}

export default Popup;