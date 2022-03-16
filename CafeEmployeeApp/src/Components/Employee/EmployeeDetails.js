import react, { useState, useRef, useCallback } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { useParams } from "react-router-dom";
import { Row, Col, Button } from 'antd';
import store from "../../redux/store";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const EmployeeTable = () => {
    //const { empId } = useParams();
    const gridRef = useRef();

    const [rowData] = useState([
        { Name: "Toyota", Description: "Celica", Employees: 35000, Location: 35000 },
        { Name: "Ford", Description: "Mondeo", Employees: 32000, Location: 35000 },
        { Name: "Porsche", Description: "Boxter", Employees: 72000, Location: 35000 }
    ]);

    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.sizeColumnsToFit();
    }, []);

    const [columnDefs] = useState([
        { field: 'Employee ID' },
        { field: 'Name' },
        { field: 'Email' },
        { field: 'Phone Number' },
        { field: 'Days Worked' },
        { field: 'Cafe name' },
        { field: 'Action' }
    ])
    return (
        <div>
            <Row>
                <Col span={2} offset={22}>
                    <Button style={{ marginTop: 5 }}>Add Employee</Button>
                </Col>
            </Row>
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <div>Employee id - {store.getState()}</div>

                    <div className="ag-theme-alpine" style={{ height: 400, width: 'auto' }}>
                        <AgGridReact
                            ref={gridRef}
                            rowData={rowData}
                            columnDefs={columnDefs}
                            onFirstDataRendered={onFirstDataRendered}>
                        </AgGridReact>
                    </div>
                </Col>
                <Col span={1} />
            </Row>
        </div >
    );
}

export default EmployeeTable;