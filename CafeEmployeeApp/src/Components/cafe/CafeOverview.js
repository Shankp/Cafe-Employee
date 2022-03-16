import react, { useState, useCallback, useRef } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import { Navigate } from 'react-router-dom';
import loadEmployeesRenderer from './buttonClickRenderer';
import ActionClickRenderer from './actionClickRenderer';
import { Row, Col, Button, Form, Input, InputNumber } from 'antd';
import store from "./../../redux/store";
import cafeStore from "./../../redux/CafeStore";
import CafeState from './../Common/CommonUtils'
import { useSelector, useDispatch } from 'react-redux'
import { GetCafeOverView, GetCafeAddView } from './CafeStateSlice'


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'antd/dist/antd.css';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const MyForm = () => {

    const state = useSelector((state) => state.cafe.value);
    const dispatch = useDispatch()
    // const [forceUpdate] = useForceUpdate()
    const onFinish = (values: any) => {
        //console.log(values);
        //cafeStore.dispatch({ type: CafeState.CafeOverview });
        //forceUpdate()
    };

    const cancelForm = () => {
        //console.log(values);
        //cafeStore.dispatch({ type: CafeState.CafeOverview });
        dispatch(GetCafeOverView())
        //forceUpdate()
    };




    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'website']} label="Website">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button style={{ margin: 2 }} type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button type="primary" htmlType="button" onClick={() => cancelForm()}>
                    Cancel
                </Button>
            </Form.Item>
        </Form>
    );
};
// const useForceUpdate = () => {
//     const [count, setCount] = useState(0)

//     const increment = () => setCount(prevCount => prevCount + 1)
//     return [increment, count]
// }

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