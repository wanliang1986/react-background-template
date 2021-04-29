import React, { Component } from 'react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import {Button} from 'antd'

import ActionCell from './ActionCell'
import Authorized from '../../components/Authorized/Authorized'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


// const columnDefs = [
//     {
//         headerName: 'Id',
//         field: 'id',
//         flex: 1,//可用width固定宽度，也可用flex来自适应宽度
//         sortable: true
//     },
//     {
//         headerName: 'Name',
//         field: 'name',
//         flex: 1,
//         sortable: true
//     },
//     {
//         headerName: 'Age',
//         field: 'age',
//         type: 'numberColumn',
//         flex: 1,
//         sortable: true
//     }
// ]

let defaultColDef = {
    // width: 150,
    editable: false,//是否开启单元格编辑,true开启，false关闭
    filter: 'agTextColumnFilter',
    // floatingFilter: true, //是否单独出现搜索框
    resizable: true
}
let frameworkComponents = {
    actionCell: ActionCell,
}
const rowData = [
    { id: 1, name: '111', age: 15 },
    { id: 2, name: '222', age: 25 },
    { id: 3, name: '333', age: 35 },
    { id: 4, name: '444', age: 45 },
    { id: 5, name: '555', age: 55 },
    { id: 6, name: '666', age: 65 },
    { id: 7, name: '777', age: 75 },
]
class TablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{ height: "100%", width: "100%" }}>
                <Authorized at={'table_add'} noMatch={null}>
                   <Button type="primary">223323</Button>
                </Authorized>
                <Authorized at={'table_list'} noMatch={null}> 
                    <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
                        <AgGridReact
                            // modules={modules}
                            // columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                            frameworkComponents={frameworkComponents}
                            // defaultColGroupDef={this.state.defaultColGroupDef}
                            // columnTypes={this.state.columnTypes}
                            rowData={rowData}

                        // onGridReady={this.onGridReady}
                        >
                            <AgGridColumn field="id" flex={1} sortable={true} unSortIcon={true}></AgGridColumn>
                            <AgGridColumn field="name" flex={1}></AgGridColumn>
                            <AgGridColumn field="age" flex={1}></AgGridColumn>
                            <AgGridColumn field="action" cellRenderer='actionCell'></AgGridColumn>
                        </AgGridReact>
                    </div>
                </Authorized>
            </div>

        );
    }
}

export default TablePage;