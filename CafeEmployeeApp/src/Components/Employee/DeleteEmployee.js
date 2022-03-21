import React from "react";
import { Popconfirm, Button } from "antd";
import { useDispatch } from "react-redux";
import { DeleteEmployee } from "./../../Services/EmployeeService";
import { GetEmployeeCountByState } from '../../redux/Slices/UpdateEmployeeStateSlice'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const empId = props.valueFormatted ? props.valueFormatted : props.value;

    const dispatch = useDispatch()


    const DeleteClicked = async () => {
        var empCount = await DeleteEmployee(empId);
        dispatch(GetEmployeeCountByState(empCount))
    };

    function cancel(e) {
        console.log(e);
    }

    return (
        <span>
            <Popconfirm
                title="Are you sure to delete?"
                onConfirm={DeleteClicked}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <Button type="primary" danger >Delete</Button>
            </Popconfirm>
        </span>
    );
};