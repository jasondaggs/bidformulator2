import * as React from 'react'


class ShellService {

    static getColumns() {

        let columnDefs= [
          {
            headerName: "Location", field: "make",width: 300,pinned: "left"
          }, {
            headerName: "Date", field: "model",width: 75,pinned: "left"
          }, {
            headerName: "Strategy", field: "model",width: 75,pinned: "left"
          }, {
            headerName: "HE", field: "price",width: 75,pinned: "left"
          }, {
            headerName: "Bid Status", field:"status", wdith: 10,pinned: "left"
          }, {
            headerName: "ISO Status", field:"status", wdith: 10,pinned: "left"
          }, {
            headerName: "BP1(MW)", field:"BP1MW"
          }, {
            headerName: "BP2(MW)", field:"BP2MW"
          }, {
            headerName: "BP3(MW)", field:"BP3MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
          }, { 
            headerName: "BP4(MW)", field:"BP4MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
          }, {
            headerName: "BP4(MW)", field:"BP4MW"
            }
            ];

        return columnDefs;
    }

    static getData() {

      const rowData= [{
        make: "Toyota", model: "Celica", price: 35000
      }, {
        make: "Ford", model: "Mondeo", price: 32000
      }, {
        make: "Porsche", model: "Boxter", price: 72000
      }];
        return rowData;
    }

}

export default ShellService;
