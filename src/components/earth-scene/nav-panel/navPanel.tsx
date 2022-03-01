import React from 'react';
import { INavPanelItem } from '../../../types';
import NavPanelItem from './nav-panel-item/navPanelItem';
import './navPanel.css'


interface INavPanel {
    navPanelItems: Array<INavPanelItem>;
    setRotation: (x:number, y:number) => void;
}

const NavPanel: React.FC<INavPanel> = (props) => {

    const navPanelWidth:number =  window.innerWidth * 1/3;
    const navPanelHieght:number = window.innerHeight * 2/3;

    const navPanelItems: Array<JSX.Element> = props.navPanelItems.map((item, index) => <NavPanelItem navPanelItem = {item} key = {index} setRotation = {props.setRotation}>
    </NavPanelItem>)

    return (

        <div className = 'panel' >
            <div className = 'panel__title'>Приключения рядом</div>
            <div className='panel__text'>Узнай много интересного о достопримечательностях мира и посмотри их вблизи</div>
            <div className='panel__container'>{navPanelItems}</div>
        </div>
    )
}

export default NavPanel;