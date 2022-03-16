import React from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const navigate = useNavigate();

  const editClicked = () => {
    //alert(`${cellValue} medals won!`);
    console.log("edit button clicked");
    //navigate("/employees/" + cellValue);
  };
  const DeleteClicked = () => {
    //alert(`${cellValue} medals won!`);
    console.log("Delete button clicked");
    //navigate("/employees/" + cellValue);
  };

  return (
    <span>
      <button onClick={() => editClicked()}>Edit</button>
      <button onClick={() => DeleteClicked()}>Delete</button>
    </span>
  );
};
