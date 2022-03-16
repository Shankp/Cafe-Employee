import React from "react";
import { useNavigate } from "react-router-dom";
import store from "../../redux/store";
import { useSelector, useDispatch } from 'react-redux'
import { GetExployeeId } from '../Employee/EmployeeIdSlice'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const buttonClicked = () => {
    //alert(`${cellValue} medals won!`);
    console.log("button clicked" + cellValue);

    dispatch(GetExployeeId(cellValue))
    //store.dispatch({ type: "empId", payload: cellValue });

    navigate("/employees");
  };

  return (
    <span>
      <button onClick={() => buttonClicked()}>Employees</button>
    </span>
  );
};
