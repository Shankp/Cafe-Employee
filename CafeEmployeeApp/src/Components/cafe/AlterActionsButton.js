import React from "react";
import { useDispatch } from "react-redux";
import { Popconfirm, Button } from "antd";
import { DeleteCafe } from "../../Services/CafeService";
import { GetCafeListCountByState } from '../../redux/Slices/UpdateCafeStateSlice'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const cafeId = props.valueFormatted ? props.valueFormatted : props.value;

  const editClicked = () => {
    console.log("edit button clicked");
  };

  const dispatch = useDispatch()

  const DeleteClicked = async () => {
    var cafeCount = await DeleteCafe(cafeId);
    dispatch(GetCafeListCountByState(cafeCount))

  };

  function cancel(e) {
    console.log(e);
  }

  return (
    <span>
      <Button type="primary" style={{ marginRight: '5px' }} disabled onClick={() => editClicked()}>
        Edit
      </Button>
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
