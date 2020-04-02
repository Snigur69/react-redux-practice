import React from 'react';

const ChangeSkills = (props) => {
    return (
    <div>
        <input onChange={props.changeID} value={props.state.newId} placeholder="ID" />
        <input onChange={props.changeValue} value={props.state.newSkill} placeholder="value" />
        <button onClick={props.changeSkill}>Change</button>
        <button onClick={props.deleteSkillId}>Delete</button>
    </div>
    )
}
export default ChangeSkills;