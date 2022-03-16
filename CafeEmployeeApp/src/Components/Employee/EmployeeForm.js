
import { Button, Form, Input, InputNumber } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GetEmployeeList, GetEmployeeAddView } from './EmployeeStateSlice'


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'antd/dist/antd.css';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
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


const EmployeeForm = () => {
    
    const dispatch = useDispatch()

    const onFinish = (values: any) => {
        //console.log(values);

    };

    const cancelForm = () => {        //console.log(values);

        dispatch(GetEmployeeList())
    };




    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} style={{ margin: 50 }}>
            <Form.Item span={1} name={['user', 'name']} label="Cafe Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'description']} label="Description">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'logo']} label="Logo" rules={[{ type: 'number', min: 0, max: 99 }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item name={['user', 'Location']} label="Location">
                <Input />
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

export default EmployeeForm;