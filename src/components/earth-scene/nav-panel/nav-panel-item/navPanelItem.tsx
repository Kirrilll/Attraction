import React, { Suspense } from 'react';
import { useContext } from 'react';
import GeometryHelper from '../../../../helpers/geometryHelper';
import { INavPanelItem } from '../../../../types';
import './navPanelItem.css'
import { useState } from 'react';

interface INavPanelItemProp {
    navPanelItem: INavPanelItem,
    setRotation: (x: number, y: number) => void;
    setInvisible: () => void;
}

const NavPanelItem: React.FC<INavPanelItemProp> = (props) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    //Расчет всего здесь
    const rotateEarth = () => {
        const kLat =  45 * Math.sign(Math.round(props.navPanelItem.coordinates.latitude));
        const kLon =  45 * Math.sign(Math.round(props.navPanelItem.coordinates.longitude));
        const x = GeometryHelper.degToRad( 90 + kLat - props.navPanelItem.coordinates.latitude );
        const y = GeometryHelper.degToRad(90 + kLon  -  props.navPanelItem.coordinates.longitude);
        props.setRotation(x, y);
    }

    const mouseEnter = () => {
        setIsHovered(true)
    }

    const mouseLeave = () => {
        setIsHovered(false)
    }

    const onClick = () => {
        rotateEarth();
        props.setInvisible();
    }

    let flagPath:string = isHovered ? props.navPanelItem.flagHoveredPath : props.navPanelItem.flagDefaultPath;



    return (
        <button
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className='container__item item'
            onClick={onClick}>
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