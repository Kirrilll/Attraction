import React, { Suspense } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { transform } from 'typescript';
import { INavPanelContainer, INavPanelItem } from '../../../types';
import CrossButton from '../../cross-button/crossButton';
import Scrollable from '../../scrollable/scrollable';
import NavPanelContainer from './nav-panel-container/navPanelContainer';
import NavPanelItem from './nav-panel-item/navPanelItem';
import NavPanelTitle from './nav-panel-title/navPanelTitle';
import './navPanel.css'

interface INavPanelProp {
    navPanelItems: Array<INavPanelItem>
    setRotation: (x: number, y: number) => void;
}

const NavPanel: React.FC<INavPanelProp> = (props) => {

    const [isVisiable, setIsVisible] = useState<boolean>(false);

    let wrapperClass = 'wrapper';

    if (isVisiable)
        wrapperClass += ' visible';

    return (
        <div className={wrapperClass}>
            {
                !isVisiable
                    ? <div className='panel-open-btn'>
                        <button onClick={() => setIsVisible(true)}>Октрыть</button>
                    </div>
                    : null
            }
            <div className='panel'>
                <div className='panel__close-btn'>
                    <CrossButton action={() => setIsVisible(false)}></CrossButton>
                </div>
                <div className='panel__title-wrapper'>
                    <NavPanelTitle></NavPanelTitle>
                </div>
                <div className='panel__text'>Узнай много интересного о достопримечательностях мира и посмотри их вблизи</div>
                <Scrollable>
                    <NavPanelContainer navPanelItems={props.navPanelItems} setRotation={props.setRotation} setInvisible={() => setIsVisible(false)}> </NavPanelContainer>
                </Scrollable>
                
            </div>
        </div>


    )
}

export default NavPanel;