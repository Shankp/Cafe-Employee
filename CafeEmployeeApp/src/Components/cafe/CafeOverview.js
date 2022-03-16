import { useState, useCallback, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import loadEmployeesRenderer from './EmploeeButton';
import ActionClickRenderer from './AlterActionsButton';
import { Row, Col, Button } from 'antd';
import cafeStore from "./../../redux/CafeStore";
import {CafeState} from './../Common/CommonUtils'
import { useSelector, useDispatch } from 'react-redux'
import { GetCafeAddView } from './CafeStateSlice'
import MyForm from './CafeForm'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'antd/dist/antd.css';


const CafeTable = () => {

    const state = useSelector((state) => state.cafe.value);
    const dispatch = useDispatch()
    console.log("state2222" + state)

    const gridRef = useRef();
    const [rowData] = useState([
        { Name: "Cafe 1", Description: "Celica", Employees: 35000, Location: "USA" },
        { Name: "Cafe 2", Description: "Mondeo", Employees: 32000, Location: "Germany" },
        { Name: "Cafe 3", Description: "Boxter", Employees: 72000, Location: "SL" }
    ]);

    const [isAddCafe, setAddCafe] = useState(false);

    const [columnDefs] = useState([
        { field: 'Logo' },
        { field: 'Name' },
        { field: 'Description' },
        { field: 'Employees', cellRenderer: loadEmployeesRenderer },
        { field: 'Location' },
        { field: 'Action', cellRenderer: ActionClickRenderer }
    ]);

    cafeStore.subscribe(() => {
        console.log('current state', cafeStore.getState());
        if (cafeStore.getState() === CafeState.CafeOverview) {
            setAddCafe(false);
        } else {
            setAddCafe(true);
        }
    })

    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.sizeColumnsToFit();
    }, []);

    const defaultColDef = {
        // set every column width
        width: 'auto'
        // make every column editable
        // editable: true,
        // // make every column use 'text' filter by default
        // filter: 'agTextColumnFilter',
    };

    const AddCafeClick = () => {
        console.log("AddCafeClick" + cafeStore.getState())
        //setAddCafe(false);
        //cafeStore.dispatch({ type: CafeState.AddCafe });
        //console.log("AddCafeClick" + cafeStore.getState())
        dispatch(GetCafeAddView());


    }



    return (
        <div>

            {state === CafeState.CafeOverview ? (
                <div>
                    <Row>
                        <Col span={2} offset={22}>
                            <Button onClick={() => AddCafeClick()} style={{ marginTop: 5 }}>Add Cafe</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={1} />
                        <Col span={22}>
                            <div className="ag-theme-alpine" style={{ height: 400, width: 'auto', marginTop: 10 }}>
                                <AgGridReact
                                    ref={gridRef}
                                    rowData={rowData}
                                    columnDefs={columnDefs}
                                    defaultColDef={defaultColDef}
                                    onFirstDataRendered={onFirstDataRendered}
                                >
                                </AgGridReact>
                            </div>
                        </Col>
                        <Col span={1} />
                    </Row>

                </div>) :
                (
                    <div>
                        <MyForm />
                    </div>
                )}

        </div>
    );
}

export default CafeTable;


