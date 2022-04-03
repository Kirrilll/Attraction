import { Html } from '@react-three/drei';
import React, { useState } from 'react';
import { IPopupProp, PopupInfoType } from '../../../types';
import Scrollable from '../../scrollable/scrollable';
import './popup.css'
import BUILDING_ICON from '../../../assets/images/building_icon.png'
import INTERESTING_ICON from '../../../assets/images/interestingFacts_icon.png'
import GENERAL_ICON from '../../../assets/images/generalFacts_icon.png'
import CrossButton from '../../cross-button/crossButton';


const Popup: React.FC<IPopupProp> = (props) => {

    const [isActive, setIsActive] = useState<Boolean>(false);

    const iconPath = () => {
        switch (props.type) {
            case PopupInfoType.BUILDING:
                return BUILDING_ICON;//'assets/images/building_icon.png';
            case PopupInfoType.INTERESTING:
                return INTERESTING_ICON;//'assets/images/interestingFacts_icon.png';
            case PopupInfoType.GENERAL:
                return GENERAL_ICON;//'assets/images/generaltingFacts_icon.png';
        }
    };

    
    const onClick = () =>{
        if(!isActive)
            setIsActive(true)
    }

    const active = isActive ? 'active' : '';
    const popapTitleClass = isActive? 'popup-title--active': 'popup-title'

    return (
        <Html occlude transform>
            <div className={popapTitleClass} onClick={onClick}>
                <img src={iconPath()} />
                <div className={`popup-title__text ${active}`}>
                    {props.title}
                    <CrossButton action={() => setIsActive(false)}></CrossButton>
                </div>
                <div className={`popup__body ${active}`}>
                    <Scrollable>
                        <div style={{maxHeight:'300px'}}>
                            <div className={`popup__body__text ${active}`}>
                                {props.content}
                            </div>
                        </div>
                    </Scrollable>
                </div>
            </div>
        </Html>
    )
}

export default Popup;