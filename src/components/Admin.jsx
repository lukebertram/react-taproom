import React from 'react';
import PropTypes from 'prop-types';
import TapList from './TapList';
import EditTapForm from './EditTapForm';
import AddNewTapButton from './AddNewTapButton';
import NewTapForm from './NewTapForm';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newTapFormVisible: false,
      editTapFormVisible: false
    };
    this.handleAddNewTapClick = this.handleAddNewTapClick.bind(this);
    this.handleNewTapFormSubmissionHide = this.handleNewTapFormSubmissionHide.bind(this);
  }

  handleAddNewTapClick() {

    this.setState({newTapFormVisible: true});
  }

  handleNewTapFormSubmissionHide() {
    this.setState({newTapFormVisible: false});
  }

  render(){
    let newTapForm = null;
    if (this.state.newTapFormVisible){
      newTapForm =
        <NewTapForm
          onAddNewTapToList={this.props.onAddNewTapToList}
          onNewTapFormSubmissionHide={this.handleNewTapFormSubmissionHide}/>;
    }
    let editTapForm = null;
    if (this.state.editTapFormVisible){
      editTapForm = <EditTapForm />;
    }

    return(
      <div>
        <h2>Admin Component</h2>
        {editTapForm}
        {newTapForm}
        <AddNewTapButton
          onAddNewTapClick={this.handleAddNewTapClick}/>
        <TapList
          tapList={this.props.tapList}
          currentRouterPath={this.props.currentRouterPath} />
      </div>
    );
  }
}

Admin.propTypes = {
  tapList: PropTypes.array,
  selectedTap: PropTypes.string,
  onAddNewTapToList: PropTypes.func,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
