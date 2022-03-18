import React from "react";
import { useNavigate } from "react-router-dom";
import { Popconfirm } from "antd";
import { DeleteEmployee } from "./../../Services/EmployeeService";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const empId = props.valueFormatted ? props.valueFormatted : props.value;
    const navigate = useNavigate();



    const DeleteClicked = async () => {
        console.log(empId)
        var isDeleted = await DeleteEmployee(empId);
        console.log(isDeleted);
        if (isDeleted) {
            //dispatch(GetCafeOverView());
        } else {
        }

        console.log("Delete button clicked");
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
                <button>Delete</button>
            </Popconfirm>
        </span>
    );
};