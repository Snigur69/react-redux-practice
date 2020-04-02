import React from 'react';
import AddAction from './addAction';
import { skills } from '../store/reducers/skills';
import ChangeSkills from './changeSkills';

class SkillsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newAction: '',
            newId: '',
            newSkill: ''
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChangeSkill = this.handleChangeSkill.bind(this);
        this.handleSubmitChangeSkill = this.handleSubmitChangeSkill.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleDeleteSkillById = this.handleDeleteSkillById.bind(this);
    }
    componentWillMount() {
        this.List = this.props.store.skills.map((el,index)=>(<li key={index}>{el}</li>));
    }
    handleDeleteSkillById() {
        this.props.deleteSkillById(this.state.newId);
        this.setState({});
    }
    handleSubmitChangeSkill() {
        this.props.changeSkill(this.state.newId, this.state.newSkill);
        this.setState({});
    }
    handleChangeId(e) {
        this.setState({
            newId: e.target.value
        })
    }
    handleChangeSkill(e) {
        this.setState({
            newSkill: e.target.value
        })
    }
    handleSubmit() {
        // this.props.store.dispatch({type: 'ADD_SKILL', custom_skill: this.state.newAction});
        this.props.addSkill(this.state.newAction);
        this.setState({
            newAction: ''
        })
        this.List = this.props.store.skills.map((el,index)=>(<li key={index}>{el}</li>));
    }
    handleChange(e) {
        this.setState({
            newAction: e.target.value
        })
    }
    handleDelete() {
        this.props.deleteLastSkill();
        this.setState({});
        // this.props.store.dispatch({type: 'DELETE_SKILL'});
        this.List = this.props.store.skills.map((el,index)=>(<li key={index}>{el}</li>));
    }
    render() {
        return (
            <div>
                <AddAction onChange={this.handleChange} onSubmit={this.handleSubmit} state={this.state} />
                <button onClick={this.handleDelete}>Удалить последнее действие</button>
                <br/>
                <ChangeSkills deleteSkillId={this.handleDeleteSkillById} changeSkill={this.handleSubmitChangeSkill} state={this.state} changeID={this.handleChangeId} changeValue={this.handleChangeSkill} />
                <ul>{this.props.store.skills.map((el,index)=>(<li key={index}>{el}</li>))}</ul>
            </div>
        )
    }
}
export default SkillsList;