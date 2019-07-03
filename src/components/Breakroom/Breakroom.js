import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import employeeShape from '../../helpers/propz/employeeShape';
import Employee from '../Employee/Employee';
import './Breakroom.scss';

class Breakroom extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(employeeShape),
    fireEmployee: PropTypes.func.isRequired,
  }

  render() {
    const { employees, fireEmployee } = this.props;
    const makeEmployees = employees.map(employee => (
      <Employee key={ employee.id } employee={ employee } fireEmployee={ fireEmployee } />
    ));

    return (
      <div className="Breakroom container Pages col-6">
        <h2 className="header">Your Stellar Employees</h2>
        <button className="btn btn-outline-info mb-4">Add New Employee!</button>
        <div className="row justify-content-around">
        { makeEmployees }
        </div>
      </div>
    );
  }
}

export default Breakroom;
