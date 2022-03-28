import { Html } from '@react-three/drei';
import React, { useState } from 'react';
import { PopupInfoType } from '../../../types';
import Scrollable from '../../scrollable/scrollable';
import './popup.css'
import BUILDING_ICON from '../../../assets/images/building_icon.png'


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
                <img src={BUILDING_ICON} />
                <div className={`popup-title__text ${active}`}>{props.title}</div>
                <div className={`popup__body ${active}`}>
                    <Scrollable>
                        {props.content}
                    </Scrollable>
                </div>
            </div>



        </Html>
    )
}

export default Popup;