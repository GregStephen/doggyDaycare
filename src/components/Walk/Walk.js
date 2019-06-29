import React from 'react';

import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    employee: walkShape,
  }

  render() {
    const { walk } = this.props;
    return (
      <div className="Walk col-12 col-md-6 col-lg-4 mb-4">
      <div className="card">
       <div className="card-body">
        <h2 className="card-title">{walk.date}</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{walk.employeeId}</li>
          <li className="list-group-item">{walk.dogId}</li>
        </ul>
       </div>
      </div>
    </div>
    );
  }
}

export default Walk;
