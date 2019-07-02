import React from 'react';

import employeeShape from '../../helpers/propz/employeeShape';

import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape,
  }

  render() {
    const { employee } = this.props;
    return (
      <div className="Employee col-12 mb-4">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="employee-image img-fluid" src={employee.imageUrl} alt=''></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{employee.name}</h2>
              <ul className="list-group list-group-flush">
                {/* <li className="list-group-item">Position: {employee.position}</li> */}
                <li className="list-group-item">{employee.yearsEmployed} years with Doggy Daycare</li>
              </ul>
            </div>
          </div>
       </div>
      </div>
    </div>
    );
  }
}

export default Employee;
