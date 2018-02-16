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
        <TapList />
      </div>
    );
  }
}

Admin.propTypes = {
  tapList: PropTypes.object
};

export default Admin;
