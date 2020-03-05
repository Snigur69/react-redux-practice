import React from 'react';
import {render} from 'react-dom';
import AddAction from './addAction';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     
            list: [],
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
        let newListAction = this.state.newAction;
        let newList = this.state.list;
        newList.push(this.state.newAction);
        this.setState({
            list: newList,
            newAction: ''
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <AddAction onChange={this.handleChange} onSubmit={this.handleSubmit} state={this.state} />
            </div>
        )
    }
}

export default List;