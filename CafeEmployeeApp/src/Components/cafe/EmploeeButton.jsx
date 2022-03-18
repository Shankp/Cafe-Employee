import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetCafeId } from "../../redux/Slices/CafeIdStateSlice";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonClicked = () => {    
    dispatch(GetCafeId(cellValue));  
    navigate("/employees");
  };

  return (
    <span>
      <button onClick={() => buttonClicked()}>Employees</button>
    </span>
  );
};
