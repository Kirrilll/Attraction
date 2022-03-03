import React, { Suspense } from 'react';
import { useContext } from 'react';
import GeometryHelper from '../../../../helpers/geometryHelper';
import { INavPanelItem } from '../../../../types';
import './navPanelItem.css'
import { useState } from 'react';

interface INavPanelItemProp {
    navPanelItem: INavPanelItem,
    setRotation: (x: number, y: number) => void;
}

const NavPanelItem: React.FC<INavPanelItemProp> = (props) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    //Расчет всего здесь

    const rotateEarth = () => {
        const x = GeometryHelper.degToRad(props.navPanelItem.coordinates.latitude - 90);
        const y = GeometryHelper.degToRad(props.navPanelItem.coordinates.longitude - 90);
        return () => props.setRotation(x, y);
    }

    const mouseEnter = () => {
        setIsHovered(true)
    }

    const mouseLeave = () => {
        setIsHovered(false)
    }

    let flagPath:string = isHovered ? props.navPanelItem.flagHoveredPath : props.navPanelItem.flagDefaultPath;



    return (
        <button
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className='container__item item'
            onClick={rotateEarth()}>
            <div className='item__wrapper'>
                <img src= {`${process.env.PUBLIC_URL}` + flagPath}/>
            </div>
            <div className = 'item__title'>
                {props.navPanelItem.title}
            </div>
            
        </button>

    )
}

export default NavPanelItem;