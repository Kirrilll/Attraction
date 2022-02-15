import React from 'react';
import { INavPanelItem } from '../../../../types';

interface INavPanelItemProp{
    navPanelItem: INavPanelItem,
}

const NavPanelItem:React.FC<INavPanelItemProp> = (props) => {



    return (
        <button>{props.navPanelItem.title}</button>
    )
}

export default NavPanelItem;