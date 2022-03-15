import { Html } from '@react-three/drei';
import React from 'react';
import { useMemo } from 'react';
import { PopupInfoType } from '../../../types';
import './popup.css'

interface IPopupProp {
    title: string,
    content: string,
    type: PopupInfoType
}


const Popup: React.FC<IPopupProp> = (props) => {

    const iconPath = () => {
        switch (props.type) {
            case PopupInfoType.BUILDING:
                return 'assets/sprites/icons/building_icon.png'
        }
    };


    

    return (
        <Html occlude transform>
            <div className='popup-title'>
                <img src={`${process.env.PUBLIC_URL}` + iconPath()} />
                <div className='popup-title__text'>{props.title}</div>
            </div>


        </Html>
    )
}

export default Popup;