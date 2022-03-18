import { useState, useCallback, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import loadEmployeesRenderer from './EmploeeButton';
import ActionClickRenderer from './AlterActionsButton';
import { Row, Col, Button } from 'antd';
import { CafeState } from './../Common/CommonUtils'
import { useSelector, useDispatch } from 'react-redux'
import { GetCafeAddView } from '../../redux/Slices/CafeStateSlice'
import { GetCafeListByState } from '../../redux/Slices/UpdateStateSlice'
import MyForm from './CafeForm'
import { GetCafeList } from './../../Services/CafeService'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'antd/dist/antd.css';


const CafeTable = () => {

    const state = useSelector((state) => state.cafe.value);
    const cafeListCount = useSelector((state) => state.CafeList.value);
    const dispatch = useDispatch()
    const gridRef = useRef();
    const [rowData, setRowData] = useState();
    const [cafeCount, setCafe] = [0];

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const cafeList = await GetCafeList();
        setRowData(cafeList);
       
        

    }, [cafeListCount]);

    const [style] = useState({
        height: '100%',
        width: '100%',
    });

    const [columnDefs] = useState([
        { field: 'logo' },
        { field: 'name' },
        { field: 'description' },
        { field: 'employee', cellRenderer: loadEmployeesRenderer },
        { field: 'location', filter: true },
        { field: 'action', cellRenderer: ActionClickRenderer }
    ]);

    const onFirstDataRendered = useCallback((params) => {
        gridRef.current.api.sizeColumnsToFit();
        gridRef.current.api.refreshCells({ force: true });
    }, []);

    const AddCafeClick = () => {

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
                            <div style={{ height: '600px' }}>
                                <div style={{ height: 'calc(100% - 25px)' }} className="ag-theme-alpine">
                                    <div style={style}>
                                        <AgGridReact
                                            ref={gridRef}
                                            rowData={rowData}
                                            columnDefs={columnDefs}
                                            onFirstDataRendered={onFirstDataRendered}
                                            sizeColumnsToFit='true'
                                            animateRows='true'
                                            getRowHeight={100}
                                            enableCellChangeFlash='true'

                                        >
                                        </AgGridReact>
                                    </div>
                                </div>
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


