import React from 'react';

const AddAction = (props) => {
    // debugger;
    return (
    <div>
        <label>Enter the Action</label>
        <input
            placeholder="action"
            onChange={props.onChange}
            value={props.state.newValue}
        />
        <button onClick={props.onSubmit}>Send Action</button>
    </div>
    )
};

export default AddAction;