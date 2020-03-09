import React from 'react'
import {Navbar,Button,Alignment} from '@blueprintjs/core'

import {AgGridReact} from 'ag-grid-react'

import '../../../node_modules/@blueprintjs/core/lib/css/blueprint.css'
import '../../../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'

import '../../../node_modules/ag-grid-community/dist/styles/ag-grid.css'
import '../../../node_modules/ag-grid-community/dist/styles/ag-theme-balham-dark.css'

import './Shell.css'


const ShellView = () => {

    document.body.className = "bp3-dark"
    //document.body.className = "bp3-body"

    let columnDefs= [{
        headerName: "Make", field: "make"
      }, {
        headerName: "Model", field: "model"
      }, {
        headerName: "Price", field: "price"
      }];
      const rowData= [{
        make: "Toyota", model: "Celica", price: 35000
      }, {
        make: "Ford", model: "Mondeo", price: 32000
      }, {
        make: "Porsche", model: "Boxter", price: 72000
      }];

    
return (
    <div>
    <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Bid Formulator</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
            <Button className="bp3-minimal" icon="cog" text="" />
        </Navbar.Group>
    </Navbar>
    <div className="ag-theme-balham-dark" style={{height: '200px', width: '100%'}}>    
        <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}> 
        </AgGridReact>
    </div>
    </div>
)


}
export default ShellView;

