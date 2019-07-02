import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader,
} from 'reactstrap';

// import Walk from '../Walk/Walk';
import WalkRow from '../WalkRow/WalkRow';
import './Walks.scss';

import walkShape from '../../helpers/propz/walkShape';
import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';

import NewWalkForm from '../NewWalkForm/NewWalkForm';

class Walks extends React.Component {
  state = {
    newModal: false,
    editModal: false,
  }

  static propTypes = {
    walks: PropTypes.arrayOf(walkShape),
    employees: PropTypes.arrayOf(employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    addNewWalk: PropTypes.func.isRequired,
    deleteWalk: PropTypes.func.isRequired,
    editWalk: PropTypes.func.isRequired,
  }

  toggleNew = () => {
    this.setState(prevState => ({
      newModal: !prevState.newModal,
    }));
  }

  render() {
    const {
      walks, dogs, employees, addNewWalk, editWalk, deleteWalk,
    } = this.props;

    const walkRows = walks.map(walk => (
      <WalkRow
      key={ walk.id }
      walk={ walk }
      deleteWalk={ deleteWalk }
      editWalk={ editWalk }
      dogs={ dogs }
      employees={ employees }
      />
    ));

    return (
      <div className="Walks hide Pages container">
        <div className="walk-page-header row justify-content-center">
          <img className="dog-banner" src="https://www.astepbeyond.co.uk/wp-content/uploads/2017/06/dog-walking-page-banner.jpg" alt="dogs walking around being cool pups"></img>
          <h2 className="walk-header">WALKS</h2>
        </div>
        <div className="walk-page-button row justify-content-end">
          <button className="new-walk-btn btn btn-outline-info m-3" onClick={this.toggleNew}>+ New Walk</button>
        </div>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Walker</th>
            <th scope="col">Dog</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {walkRows}
        </tbody>
      </table>
        <div>
          <Modal isOpen={this.state.newModal} toggle={this.toggleModal}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add A Walk!</ModalHeader>
            <NewWalkForm
            toggleNew={this.toggleNew}
            addNewWalk={ addNewWalk }
            dogs={ dogs }
            employees={ employees }/>
          </Modal>
        </div>
          {/* <div>
            <Modal isOpen={this.state.editModal} toggle={this.toggleModal}
            className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Edit this Walk!</ModalHeader>
              <Walk
              // walk={ walk }
              toggleEdit={this.toggleEdit}
              deleteWalk={ deleteWalk }
              editWalk={ editWalk }
              dogs={ dogs }
              employees={ employees }/>
            </Modal>
          </div> */}
      </div>
    );
  }
}

export default Walks;
