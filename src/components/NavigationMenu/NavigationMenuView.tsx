import * as React from "react";
import { Popover,Menu,MenuItem,Button, Position } from "@blueprintjs/core";

import "../../../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

import {NavigationMenuModel} from "./NavigationMenuModel"

const NavigationMenu = ( menuModel:NavigationMenuModel) =>
{
    const menu = (
        <Menu>
            <MenuItem text="GenManager CAISO" >
                <Menu>
                    <MenuItem text="CAISO Communications" />
                    <MenuItem text="Bid Formulation" />
                </Menu>
            </MenuItem>
            <MenuItem text="RT Operations" />
            <MenuItem text="DA Operations" />
            <MenuItem text="Settlements" />
        </Menu>

    );
    return(
        <Popover content={menu} position={Position.BOTTOM} >
          <Button className="bp3-minimal" icon="menu" />
        </Popover>

    );
}

export default NavigationMenu;
