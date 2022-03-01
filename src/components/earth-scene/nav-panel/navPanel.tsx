import React, { Suspense } from 'react';
import { INavPanelItem } from '../../../types';
import NavPanelItem from './nav-panel-item/navPanelItem';
import './navPanel.css'


interface INavPanel {
    navPanelItems: Array<INavPanelItem>;
    setRotation: (x: number, y: number) => void;
}

const NavPanel: React.FC<INavPanel> = (props) => {
    const navPanelItems: Array<JSX.Element> = props.navPanelItems.map((item, index) => <NavPanelItem navPanelItem={item} key={index} setRotation={props.setRotation}>
    </NavPanelItem>)

    return (

        <div className='wrapper'>
            <div className='panel' >
                <div className='panel__title'>Приключения рядом</div>
                <div className='panel__text'>Узнай много интересного о достопримечательностях мира и посмотри их вблизи</div>
                <div className='panel__container'>{navPanelItems}</div>
            </div>
        </div>


    )
}

export default NavPanel;