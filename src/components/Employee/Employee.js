import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import employeeShape from '../../helpers/propz/employeeShape';

import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape,
    fireEmployee: PropTypes.func.isRequired,
  }

  fireThisEmployee = (e) => {
    e.preventDefault();
    const { fireEmployee, employee } = this.props;
    fireEmployee(employee.id);
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
                <li className="list-group-item">{employee.yearsEmployed} years with Doggy Daycare</li>
              </ul>
            </div>
            <button className="btn btn-outline-danger" onClick={this.fireThisEmployee}>FIRE</button>
          </div>
       </div>
      </div>
    </div>
    );
  }
}

export default Employee;
