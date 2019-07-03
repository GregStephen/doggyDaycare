import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader,
} from 'reactstrap';
import employeeShape from '../../helpers/propz/employeeShape';
import Employee from '../Employee/Employee';
import NewEmployeeForm from '../NewEmployeeForm/NewEmployeeForm';
import './Breakroom.scss';

class Breakroom extends React.Component {
  state = {
    newEmployeeModal: false,
  }

  static propTypes = {
    dogs: PropTypes.arrayOf(employeeShape),
    fireEmployee: PropTypes.func.isRequired,
    addEmployee: PropTypes.func.isRequired,
  }

  toggleNewEmployee = () => {
    this.setState(prevState => ({
      newEmployeeModal: !prevState.newEmployeeModal,
    }));
  }

  render() {
    const { employees, fireEmployee, addEmployee } = this.props;
    const makeEmployees = employees.map(employee => (
      <Employee key={ employee.id } employee={ employee } fireEmployee={ fireEmployee } />
    ));

    return (
      <div className="Breakroom container Pages col-6">
        <h2 className="header">Your Stellar Employees</h2>
        <button className="btn btn-outline-info mb-4" onClick={this.toggleNewEmployee}>Add New Employee!</button>
        <div className="row justify-content-around">
        { makeEmployees }
        <div>
          <Modal isOpen={this.state.newEmployeeModal} toggle={this.toggleModal}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add An Employee!</ModalHeader>
            <NewEmployeeForm
            toggleNewEmployee={this.toggleNewEmployee}
            addEmployee={ addEmployee }
            employees={ employees }
            />
          </Modal>
        </div>
        </div>
      </div>
    );
  }
}

export default Breakroom;
