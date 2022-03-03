import React, { Suspense } from 'react';
import { useMemo } from 'react';
import { INavPanelContainer, INavPanelItem } from '../../../types';
import CrossButton from '../../crossButton';
import NavPanelContainer from './nav-panel-container/navPanelContainer';
import NavPanelItem from './nav-panel-item/navPanelItem';
import NavPanelTitle from './nav-panel-title/navPanelTitle';
import './navPanel.css'


const NavPanel: React.FC<INavPanelContainer> = (props) => {

    const isSmall: boolean = useMemo(() =>  window.innerWidth < 914, []);


    return (
        <div className='wrapper'>
            <div className='panel'  >
                {isSmall? <CrossButton action = {() => console.log('Закрыть')}></CrossButton> : <NavPanelTitle></NavPanelTitle>}
                <div className='panel__text'>Узнай много интересного о достопримечательностях мира и посмотри их вблизи</div>
                <NavPanelContainer navPanelItems = {props.navPanelItems} setRotation = {props.setRotation}></NavPanelContainer>
            </div>
        </div>


    )
}

export default NavPanel;