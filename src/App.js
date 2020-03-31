import React from 'react';
import logo from './logo.svg';
import './App.css';
import SkillsList from './components/skillsList';
import List from './components/toDoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {render} from 'react-redux';

import * as listActions from './store/actions/listActions';
import * as skillsActions from './store/actions/skillsActions';




function App(props) {
  
  const {addToList} = props.listActions;
  const {deleteLastItem} = props.listActions;
  const {addSkill} = props.skillsActions;
  const {deleteLastSkill} = props.skillsActions;
  const {changeActionById} = props.listActions;
  const {deleteActionById} = props.listActions;
  return (
    <div className="App">
      <List store={props.store} deleteActionById={deleteActionById} addToList={addToList} deleteLastItem={deleteLastItem} changeActionById={changeActionById}  />
      <hr />
      <SkillsList store={props.store} addSkill={addSkill} deleteLastSkill={deleteLastSkill} />
    </div>
  );
}

function mapStateToProps (state) {
  
  return {
    store: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listActions: bindActionCreators(listActions, dispatch),
    skillsActions: bindActionCreators(skillsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);