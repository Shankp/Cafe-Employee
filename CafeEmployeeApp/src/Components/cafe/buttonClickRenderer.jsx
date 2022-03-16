import React from "react";
import { useNavigate } from "react-router-dom";
import store from "../../redux/store";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  const navigate = useNavigate();

  const buttonClicked = () => {
    //alert(`${cellValue} medals won!`);
    console.log("button clicked" + cellValue);

    //store.dispatch({ type: "empId", payload: cellValue });

    navigate("/employees");
  };

  return (
    <span>
      <button onClick={() => buttonClicked()}>Employees</button>
    </span>
  );
};
