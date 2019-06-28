import React from 'react';

import employeeData from '../../helpers/data/employeeData';
import Employee from '../Employee/Employee';
import './Breakroom.scss';

class Breakroom extends React.Component {
  state = {
    employees: [],
  }

  componentDidMount() {
    employeeData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('could not get employees', err));
  }

  render() {
    const { employees } = this.state;
    const makeEmployees = employees.map(employee => (
      <Employee key={ employee.id } employee={ employee } />
    ));

    return (
      <div className="Breakroom container">
        <h2>Check Out Our Sweet Care Takers</h2>
        <div className="row justify-content-around">
        { makeEmployees }
        </div>
      </div>
    );
  }
}

export default Breakroom;
