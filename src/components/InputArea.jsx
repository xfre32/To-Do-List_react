import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onType} type="text" value={props.val} />
      <button onClick={props.onClicked}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
