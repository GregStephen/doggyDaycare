import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader,
} from 'reactstrap';

import Walk from '../Walk/Walk';
import WalkRow from '../WalkRow/WalkRow';
import './Walks.scss';

import walkShape from '../../helpers/propz/walkShape';
import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';

import NewWalkForm from '../NewWalkForm/NewWalkForm';

class Walks extends React.Component {
  state = {
    modal: false,
  }

  static propTypes = {
    walks: PropTypes.arrayOf(walkShape),
    employees: PropTypes.arrayOf(employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    addNewWalk: PropTypes.func.isRequired,
    deleteWalk: PropTypes.func.isRequired,
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const {
      walks, dogs, employees, addNewWalk, editWalk,
    } = this.props;

    const showWalks = walks.map(walk => (
      <Walk key={ walk.id } walk={ walk } deleteWalk={ this.props.deleteWalk }/>
    ));

    const walkRows = walks.map(walk => (
      <WalkRow key={ walk.id } walk={ walk } deleteWalk={ this.props.deleteWalk }/>
    ));

    return (
      <div className="Walks hide Pages container">
        <div className="walk-page-header row justify-content-center">
          <h2 className="">WALKS</h2>
        </div>
        <div className="walk-page-button row justify-content-end">
          <button className="new-walk-btn btn btn-outline-info m-3" onClick={this.toggle}>+ New Walk</button>
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
        <div className="row">
          { showWalks }
        </div>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add A Walk!</ModalHeader>
            <NewWalkForm toggle={this.toggle}
            addNewWalk={ addNewWalk }
            dogs={ dogs }
            employees={ employees }/>
          </Modal>
        </div>
        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit this Walk!</ModalHeader>
            <NewWalkForm toggle={this.toggle}
            editWalk={ editWalk }
            dogs={ dogs }
            employees={ employees }/>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Walks;
