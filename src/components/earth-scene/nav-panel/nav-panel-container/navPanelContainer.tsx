import React from 'react';
import { INavPanelContainer } from '../../../../types';
import NavPanelItem from '../nav-panel-item/navPanelItem';
import './navPanelContainer.css'

const NavPanelContainer: React.FC<INavPanelContainer> = (props) => {

    const navPanelItems: Array<JSX.Element> = props.navPanelItems.map((item, index) => (
        <NavPanelItem navPanelItem={item} key={index} setRotation={props.setRotation} setInvisible={props.setInvisible} />)
    );

    return (
        <div className='panel__container'>
            {navPanelItems}
        </div>
    )
}

export default NavPanelContainer;