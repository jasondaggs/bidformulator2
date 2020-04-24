
export interface NavigationMenuModelNode {
    children:NavigationMenuModelNode [],
    name:string,
    route:string
};

export interface NavigationMenuModel {
       nodes?:NavigationMenuModelNode,
       setComponent?:Function
};


