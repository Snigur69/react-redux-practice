import React from 'react';
import {render} from 'react-dom';
import AddAction from './addAction';
import ChangeAction from './changeAction';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     
            newAction: '',
            newId: '',
            newActionById: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChangeActionById = this.handleChangeActionById.bind(this);
        this.handleSUbmitChangeActionById = this.handleSUbmitChangeActionById.bind(this);
        this.handleDeleteActionById = this.handleDeleteActionById.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);
    }
    componentWillMount() {
        this.myList = this.props.store.custom_actions.map((el, index) => <li key={index}>{el}</li>);
    }
    handleChange(e) {
        this.setState({
            newAction: e.target.value
        })
    }
    handleChangeId(e) {
        this.setState({
            newId: e.target.value
        })
    }
    handleChangeActionById(e) {
        this.setState({
            newActionById: e.target.value
        })
    }
    handleSUbmitChangeActionById() {
        this.props.changeActionById(this.state.newId, this.state.newActionById);
    }
    handleDeleteActionById() {

    }
    handleDelete() {
        // this.props.store.dispatch({type: 'DELETE_ACTION'});
        this.props.deleteLastItem();
        this.myList = this.props.store.custom_actions.map((el, index) => <li key={index}>{el}</li>);
    }

    handleSubmit() {
        // this.props.store.dispatch({type: 'ADD_ACTION', custom_action: this.state.newAction});
        this.props.addToList(this.state.newAction);
        this.setState({
            newAction: ''
        })   
        
    this.myList = this.props.store.custom_actions.map((el, index) => <li key={index}>{el}</li>);
    }
    
    render() {
        return (
            <div>
                <AddAction onChange={this.handleChange} onSubmit={this.handleSubmit} state={this.state} />
                <button onClick={this.handleDelete}>Удалить последнее действие</button>
                <br/>
                <ChangeAction valueId={this.state.newId} valueAction={this.state.newActionById} onIdChange={this.handleChangeId} onActionChange={this.handleChangeActionById} onActionSubmit={this.handleSUbmitChangeActionById} onActionDelete={this.handleDeleteActionById} />
                <ul>{this.myList}</ul>
            </div>
        )
    }
}

export default List;