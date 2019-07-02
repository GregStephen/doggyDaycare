import React from 'react';
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader,
} from 'reactstrap';
import Walk from '../Walk/Walk';
import walkShape from '../../helpers/propz/walkShape';

class WalkRow extends React.Component {
  state = {
    editModal: false,
  }

  static propTypes = {
    walk: walkShape,
    deleteWalk: PropTypes.func.isRequired,
    editWalk: PropTypes.func.isRequired,
  }

  toggleEdit = () => {
    this.setState(prevState => ({
      editModal: !prevState.editModal,
    }));
  }

  deleteWalkEvent = (e) => {
    const { walk, deleteWalk } = this.props;
    e.preventDefault();
    deleteWalk(walk.id);
  }

  showEditModal = (e) => {
    e.preventDefault();
    this.props.toggleEdit();
  }

  render() {
    const {
      walk, deleteWalk, editWalk, dogs, employees,
    } = this.props;
    const date = moment(walk.date).format('L');
    const time = moment(walk.date).format('LT');

    return (
      <tr>
        <td>{date}</td>
        <td>{time}</td>
        <td>{walk.employeeName}</td>
        <td>{walk.doggoName}</td>
        <td><button className="btn btn-info edit-walk-button mr-4" onClick={this.toggleEdit}>Edit</button>
        <button className="btn btn-danger" onClick={this.deleteWalkEvent}>X</button></td>
          <Modal isOpen={this.state.editModal} toggle={this.toggleModal}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Edit this Walk!</ModalHeader>
            <Walk
            walk={ walk }
            toggleEdit={this.toggleEdit}
            deleteWalk={ deleteWalk }
            editWalk={ editWalk }
            dogs={ dogs }
            employees={ employees }
            />
          </Modal>
      </tr>
    );
  }
}

export default WalkRow;
