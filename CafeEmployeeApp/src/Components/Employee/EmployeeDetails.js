import { useState, useRef, useCallback, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Row, Col, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GetEmployeeList, GetEmployeeAddView } from '../../redux/Slices/EmployeeStateSlice'
import EmployeeForm from './EmployeeForm'
import { EmployeeState } from './../Common/CommonUtils'
import { GetCafeOverView } from './../../redux/Slices/CafeStateSlice'
import { useNavigate } from "react-router-dom";
import { GetEmployeeListService } from './../../Services/EmployeeService'
import EmployeeDeleteRenderer from './DeleteEmployee';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const EmployeeTable = () => {

    const cafeId = useSelector((state) => state.cafeId.value);

    const gridRef = useRef();


    const state = useSelector((state) => state.employeeViewState.value);
    const employeeListCount = useSelector((state) => state.empoyeeList.value);
  
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [rowData, setRowData] = useState();

    const onFirstDataRendered = useCallback(() => {
        gridRef.current.api.sizeColumnsToFit();
    }, []);

    const [columnDefs] = useState([
        { field: 'employeeId' },
        { field: 'name' },
        { field: 'email' },
        { field: 'phoneNumber' },
        { field: 'daysWorked' },
        { field: 'cafeName' },
        { field: 'action', cellRenderer: EmployeeDeleteRenderer }
    ])

    const AddEmployeeClick = () => {
        dispatch(GetEmployeeAddView());
    }
    const GoCafelist = () => {

        dispatch(GetCafeOverView());
        dispatch(GetEmployeeList());
        navigate("/cafe");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        // eslint-disable-next-line eqeqeq      

        if (cafeId === null || cafeId === undefined) {
            dispatch(GetCafeOverView());
            navigate("/cafe");
        } else {
            var empList = await GetEmployeeListService(cafeId);
            setRowData(empList);
        }

    }, [employeeListCount]);

    return (
        <div>
            {state === EmployeeState.EmployeeList ? (
                <div>
                    <Row>
                        <Col span={2} offset={1}>
                            <Button onClick={() => GoCafelist()} style={{ marginTop: 5 }}>Cafe List</Button>
                        </Col>
                        <Col span={2} offset={18}>
                            <Button onClick={() => AddEmployeeClick()} style={{ marginTop: 5 }}>Add Employee</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={1} />
                        <Col span={22}>
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
                </div>) :
                (
                    <div>
                        <EmployeeForm />
                    </div>)}
        </div >
    );
}

export default EmployeeTable;