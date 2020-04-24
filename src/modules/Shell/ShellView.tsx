import React,{useState} from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";

import "../../../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

import NavigationMenu from "../../components/NavigationMenu";

import "./Shell.css";

const ShellView = () => {

  const [component,setComponent] = useState(( <div style={{margin: "0px",display:"inline",color:"black"}}> Dynamically loaded Screen </div> ));

  document.body.className = "bp3-dark";

  return (
    <div>
      <Navbar style={{padding: "0px"}} >
        <Navbar.Group align={Alignment.LEFT}>
          <NavigationMenu />
          <Navbar.Heading></Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button className="bp3-minimal" icon="cog" text="" />
        </Navbar.Group>
      </Navbar>
        {component}
    </div>
  );
};
export default ShellView;
