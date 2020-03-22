import React from 'react';
import {render} from 'react-dom';
import AddAction from './addAction';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     
            newAction: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentWillMount() {
        this.myList = this.props.store.getState().custom_actions.map((el, index) => <li key={index}>{el}</li>);
    }
    handleChange(e) {
        this.setState({
            newAction: e.target.value
        })
    }
    handleDelete() {
        this.props.store.dispatch({type: 'DELETE_ACTION'});
        this.myList = this.props.store.getState().custom_actions.map((el, index) => <li key={index}>{el}</li>);
    }
    handleSubmit() {
        this.props.store.dispatch({type: 'ADD_ACTION', custom_action: this.state.newAction});
        this.setState({
            newAction: ''
        })   
    this.myList = this.props.store.getState().custom_actions.map((el, index) => <li key={index}>{el}</li>);
    }
    
    render() {
        return (
            <div>
                <AddAction onChange={this.handleChange} onSubmit={this.handleSubmit} state={this.state} />
                <button onClick={this.handleDelete}>Удалить последнее действие</button>
                <ul>{this.myList}</ul>
            </div>
        )
    }
}

export default List;