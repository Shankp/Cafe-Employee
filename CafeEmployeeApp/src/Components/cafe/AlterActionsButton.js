import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetCafeOverView } from "../../redux/Slices/CafeStateSlice";
import { Popconfirm } from "antd";
import { DeleteCafe } from "../../Services/CafeService";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const cafeId = props.valueFormatted ? props.valueFormatted : props.value;
  const navigate = useNavigate();

  const editClicked = () => {
    console.log("edit button clicked");
  };

  const DeleteClicked = async () => {
    var isDeleted = await DeleteCafe(cafeId);
    if (isDeleted) {
      //dispatch(GetCafeOverView());
    } else {
    }
    // dispatch(GetCafeOverView());
    console.log("Delete button clicked");
  };

  function cancel(e) {
    console.log(e);
  }

  return (
    <span>
      <button disabled onClick={() => editClicked()}>
        Edit
      </button>
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
