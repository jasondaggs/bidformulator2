
import React,{useEffect,useState} from "react"
import NavigationMenuView from "./NavigationMenuView"
import {LoadModelCommand} from "./NavigationServiceCommands"
import {NavigationMenuModel} from "./NavigationMenuModel"
import Service from "../Service";

const NavigationMenuController = (navigationModelParameter:NavigationMenuModel) => {
    const [navigationModel,setNavigationModel] = useState<NavigationMenuModel>(navigationModelParameter);

    useEffect(() => {
        let loadModelCommand:LoadModelCommand={};

        let result = Service.execute(loadModelCommand);
    });

    return ( <NavigationMenuView /> );
};

export default NavigationMenuController;
