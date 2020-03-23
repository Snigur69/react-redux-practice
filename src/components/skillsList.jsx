import React from 'react';
import AddAction from './addAction';
import { skills } from '../store/reducers/skills';

class SkillsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newAction: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentWillMount() {
        this.List = this.props.store.getState().skills.map((el,index)=>(<li key={index}>{el}</li>));
    }
    handleSubmit() {
        this.props.store.dispatch({type: 'ADD_SKILL', custom_skill: this.state.newAction});
        this.setState({
            newAction: ''
        })
        this.List = this.props.store.getState().skills.map((el,index)=>(<li key={index}>{el}</li>));
    }
    handleChange(e) {
        this.setState({
            newAction: e.target.value
        })
    }
    handleDelete() {
        this.props.store.dispatch({type: 'DELETE_SKILL'});
        this.List = this.props.store.getState().skills.map((el,index)=>(<li key={index}>{el}</li>));
    }
    render() {
        return (
            <div>
                <AddAction onChange={this.handleChange} onSubmit={this.handleSubmit} state={this.state} />
                <button onClick={this.handleDelete}>Удалить последнее действие</button>
                <ul>{this.List}</ul>
            </div>
        )
    }
}
export default SkillsList;