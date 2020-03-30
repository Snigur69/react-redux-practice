import React from 'react';

const ChangeAction = (props) => {
    return (
        <div>
            <input type="text" placeholder={'ID'} onChange={props.onIdChange} value={props.valueId}/>
            <input type="text" placeholder={'value'} onChange={props.onActionChange} value={props.valueAction}/>
            <button onClick={props.onActionSubmit}>Change</button>
            <button onClick={props.onActionDelete}>Delete</button>
        </div>
    )
}
export default ChangeAction;
