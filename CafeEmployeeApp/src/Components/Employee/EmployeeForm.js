
import { Button, Form, Input, Select, Radio, notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GetEmployeeList } from '../../redux/Slices/EmployeeStateSlice'
import { CreateEmployee } from './../../Services/EmployeeService'


import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'antd/dist/antd.css';
import { useState } from 'react';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};

const EmployeeForm = () => {

    const { Option } = Select;
    const dispatch = useDispatch()
    const [gender, setGender] = useState();
    const cafeId = useSelector((state) => state.cafeId.value);

    const onFinish = async (values) => {
        console.log(values);

        if (cafeId === null || cafeId === undefined) {
            openNotification("Cafe is not selected for this employee")
        } else {            
            var employeeCreated = await CreateEmployee(values, gender, cafeId);
            if (employeeCreated) {
                dispatch(GetEmployeeList())
            } else {
                openNotification()
            }
        }
    };

    const cancelForm = () => {       
        dispatch(GetEmployeeList())
    };
    const onChange = e => {
        console.log('radio checked', e.target.value);
        setGender(e.target.value);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="8">+8</Option>
                <Option value="9">+9</Option>
            </Select>
        </Form.Item>
    );
    const openNotification = (reason) => {
        notification.error({
            message: 'Failed to save new employee',
            description: reason,
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} style={{ margin: 50 }}>

            {/* <Form.Item span={1} name={['employee', 'EmployeeId']} label="Employee Id"
                rules={[{ required: true, message: 'Please input your Name!' },
                {
                    pattern: new RegExp("^[a-zA-Z0-9]+$"),
                    message: "Please use number and leters"
                }
                ]}>
                <Input addonBefore={"UI"} />
            </Form.Item> */}
            <Form.Item span={1} name={['employee', 'Name']} label="Employee Name" rules={[{ required: true, min: 6, max: 10, message: 'Please input your Name!' }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['employee', 'Email']} label="Email" rules={[{ required: true, message: 'Please input your email !' }]}>
                <Input />
            </Form.Item>
            <Form.Item
                name={['employee', 'PhoneNumber']}
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!', min: 7, max: 7 }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item name={['employee', 'Gender']} label="Gender" rules={[{ required: true, message: 'Please select gender!' }]}>
                <Radio.Group onChange={onChange} value={gender}>
                    <Radio value={0}>Male</Radio>
                    <Radio value={1}>Female</Radio>
                    <Radio value={2}>Other</Radio>
                </Radio.Group>
            </Form.Item>
            {/* <Form.Item name={['employee', 'CafeName']} label="Cafe Name">
                <Input />
            </Form.Item> */}
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