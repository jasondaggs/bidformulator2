import * as React from "react";
import { Navbar, Button, ButtonGroup, Alignment } from "@blueprintjs/core";
import { DateInput } from "@blueprintjs/datetime";
import { AgGridReact } from "ag-grid-react";

import "../../../node_modules/@blueprintjs/core/lib/css/blueprint.css";
import "../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css";

import "../../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
import "../../../node_modules/ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import ShellService from "./ShellService";
import "./Shell.css";

const ShellView = () => {
  document.body.className = "bp3-dark";

  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Button className="bp3-minimal" icon="menu" />
          <Navbar.Heading>Bid Formulator</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button className="bp3-minimal" icon="cog" text="" />
        </Navbar.Group>
      </Navbar>
      <ButtonGroup>
        <DateInput
          className="shell-datetime"
          defaultValue={new Date()}
          formatDate={date => date.toLocaleDateString()}
          parseDate={str => new Date(str)}
          fill={false}
        />
        <Button rightIcon="caret-down" icon="document" text="File" />
      </ButtonGroup>
      <div
        className="ag-theme-balham-dark"
        style={{ height: "200px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={ShellService.getColumns()}
          rowData={ShellService.getData()}
        ></AgGridReact>
      </div>
    </div>
  );
};
export default ShellView;
