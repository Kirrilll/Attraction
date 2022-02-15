import React from 'react';
import { INavPanelItem } from '../../../types';
import NavPanelItem from './nav-panel-item/navPanelItem';
import './navPanel.css'


interface INavPanel {
    navPanelItems: Array<INavPanelItem>
}

const NavPanel: React.FC<INavPanel> = (props) => {

    const navPanelItems: Array<JSX.Element> = props.navPanelItems.map((item, index) => <NavPanelItem navPanelItem = {item} key = {index}>
    </NavPanelItem>)

    return (
        <div>
            {navPanelItems}
        </div>
    )
}

export default NavPanel;