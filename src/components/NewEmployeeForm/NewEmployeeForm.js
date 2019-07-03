import React from 'react';
import {
  Form, FormGroup, Label, Input, ModalBody, ModalFooter, Button, Col,
} from 'reactstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import employeeShape from '../../helpers/propz/employeeShape';

class NewEmployeeForm extends React.Component {
  static propTypes = {
    addEmployee: PropTypes.func.isRequired,
    employees: PropTypes.arrayOf(employeeShape),
    toggleNewEmployee: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    yearsEmployed: 0,
    imageUrl: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleModal = () => {
    const { toggleNewEmployee } = this.props;
    toggleNewEmployee();
  }

  handleNewEmployeeSubmit = (e) => {
    const { addEmployee } = this.props;
    e.preventDefault();
    const newEmployee = {
      name: this.state.name,
      imageUrl: this.state.imageUrl,
      yearsEmployed: this.state.yearsEmployed,
    };
    addEmployee(newEmployee);
    this.toggleModal();
  }


  render() {
    return (
      <div>
      <Form onSubmit={this.handleNewEmployeeSubmit}>
      <ModalBody>
          <FormGroup row>
            <Label for="name" sm={2}>Name:</Label>
            <Col sm={10}>
              <Input type="input" name="name" placeholder="Employee Name" id="name" value={this.state.name} onChange={this.handleChange} required>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="imageUrl" sm={2}>Pic:</Label>
            <Col sm={10}>
            <Input
              type="Url"
              name="imageUrl"
              id="imageUrl"
              placeholder="Url Link To The Employee's Pic"
              onChange={this.handleChange}
              required
            />
            </Col>
          </FormGroup>
       </ModalBody>
       <ModalFooter>
         <Button type="submit" color="primary">Add Employee!</Button>{' '}
         <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
       </ModalFooter>
       </Form>
       </div>
    );
  }
}

export default NewEmployeeForm;
