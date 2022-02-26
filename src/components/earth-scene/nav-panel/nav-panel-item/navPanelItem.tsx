import React from 'react';
import { useContext } from 'react';
import GeometryHelper from '../../../../helpers/geometryHelper';
import { INavPanelItem } from '../../../../types';
import './navPanelItem.css'

interface INavPanelItemProp{
    navPanelItem: INavPanelItem,
    setRotation: (x:number, y:number) => void;
}

const NavPanelItem:React.FC<INavPanelItemProp> = (props) => {

    //Расчет всего здесь
    const x =  GeometryHelper.degToRad( props.navPanelItem.coordinates.latitude-90);
    const y = GeometryHelper.degToRad( props.navPanelItem.coordinates.longitude-90);

    return (
        <button className='container__item' onClick = {() =>  props.setRotation(x, y) }>{props.navPanelItem.title}</button>
    )
}

export default NavPanelItem;