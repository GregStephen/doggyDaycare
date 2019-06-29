import React from 'react';

import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';

const moment = require('moment');

class Walk extends React.Component {
  static propTypes = {
    employee: walkShape,
  }

  render() {
    const { walk } = this.props;
    const date = moment(walk.date).format('L');
    const time = moment(walk.date).format('LT');

    return (
      <div className="Walk col-12 col-md-6 col-lg-4 mb-4">
      <div className="card">
       <div className="card-body">
        <h2 className="card-title">{date}</h2>
        <h4>{time}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><img className="walk-employee-image"src={walk.employeeImage} alt={walk.employeeName}></img></li>
          <li className="list-group-item">{walk.employeeName} is walking: </li>
          <li className="list-group-item"><img className="walk-doggo-image"src={walk.doggoImage} alt={walk.doggoName}></img></li>
          <li className="list-group-item">{walk.doggoName}</li>
        </ul>
       </div>
      </div>
    </div>
    );
  }
}

export default Walk;
