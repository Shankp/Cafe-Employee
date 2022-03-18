import { Button, Form, Input, notification } from 'antd';
import { useDispatch } from 'react-redux'
import { GetCafeOverView } from '../../redux/Slices/CafeStateSlice'
import { CreateCafe } from './../../Services/CafeService'
import { GetCafeListCountByState } from '../../redux/Slices/UpdateCafeStateSlice'


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

const MyForm = () => {

    const dispatch = useDispatch()
    const OnFinish = async (values) => {
        try {
            var cafeCreated = await CreateCafe(values)
            dispatch(GetCafeOverView())
            dispatch(GetCafeListCountByState(cafeCreated))
        } catch (error) {
            openNotification()
        }
    };

    const cancelForm = () => {
        dispatch(GetCafeOverView())
    };

    const openNotification = () => {
        notification.error({
            message: 'Failed to save new Cafe',
            description: '',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    return (
        <Form {...layout} name="nest-messages" onFinish={OnFinish} validateMessages={validateMessages} style={{ margin: 50 }}>
            <Form.Item span={1} name={['cafe', 'Name']} label="Cafe Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['cafe', 'Description']} label="Description" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            {/* <Form.Item name={['user', 'logo']} label="Logo" rules={[{ type: 'number', min: 0, max: 99 }]}>
                <InputNumber />
            </Form.Item> */}
            <Form.Item name={['cafe', 'Location']} label="Location" rules={[{ required: true }]}>
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

export default MyForm;