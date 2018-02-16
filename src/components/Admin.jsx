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
      showNewTapForm: false,
      showEditTapForm: false
    }
  }

  render(){

    return(
      <div>
        <h2>Admin Component</h2>
        <EditTapForm />
        <NewTapForm />
        <AddNewTapButton />
        <TapList
          tapList={this.props.tapList}
          currentRouterPath={this.props.currentRouterPath} />
      </div>
    );
  }
}

Admin.propTypes = {
  tapList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
