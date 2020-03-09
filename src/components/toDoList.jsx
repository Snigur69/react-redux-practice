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
    }

    handleChange(e) {
        this.setState({
            newAction: e.target.value
        })
        
    }
    handleSubmit() {
        // let newList = this.state.list;
        // newList.push(this.state.newAction);
        this.props.store.dispatch({type: 'ADD_ACTION', custom_action: this.state.newAction});
        this.setState({
            newAction: ''
        })
    this.myList = this.props.store.getState().map((el, index) => <li key={index}>{el}</li>);
    }
    render() {
        return (
            <div>
                <AddAction onChange={this.handleChange} onSubmit={this.handleSubmit} state={this.state} />
                <ul>{this.myList}</ul>
            </div>
        )
    }
}

export default List;