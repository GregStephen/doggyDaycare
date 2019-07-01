import React from 'react';
import moment from 'moment';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';

class WalkRow extends React.Component {
  static propTypes = {
    employee: walkShape,
    deleteWalk: PropTypes.func.isRequired,
    editWalk: PropTypes.func.isRequired,
  }

  deleteWalkEvent = (e) => {
    const { walk, deleteWalk } = this.props;
    e.preventDefault();
    deleteWalk(walk.id);
  }

  showEditModal = (e) => {
    e.preventDefault();
    console.error('clicked edit');
  }

  render() {
    const { walk } = this.props;
    const date = moment(walk.date).format('L');
    const time = moment(walk.date).format('LT');

    return (
      <tr>
        <td>{date}</td>
        <td>{time}</td>
        <td>{walk.employeeName}</td>
        <td>{walk.doggoName}</td>
        <td><button className="btn btn-info edit-walk-button mr-4" onClick={this.showEditModal}>Edit</button>
        <button className="btn btn-danger" onClick={this.deleteWalkEvent}>X</button></td>
      </tr>
    );
  }
}

export default WalkRow;
