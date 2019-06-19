import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';
import Employee from '../Employee/Employee';
import './Breakroom.scss';

class Breakroom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const { employees } = this.props;
    const makeEmployees = employees.map(employee => (
      <Employee key={ employee.id } employee={ employee } />
    ));

    return (
      <div className="Breakroom container">
      <div className="row justify-content-around">
        { makeEmployees }
      </div>
    </div>
    );
  }
}

export default Breakroom;
