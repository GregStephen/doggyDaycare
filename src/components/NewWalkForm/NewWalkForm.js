import React from 'react';
import {
  Form, FormGroup, Label, Input, ModalBody, ModalFooter, Button,
} from 'reactstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import dogShapes from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';

const moment = require('moment');

class NewWalkForm extends React.Component {
  static propTypes = {
    addNewWalk: PropTypes.func.isRequired,
    dogs: PropTypes.arrayOf(dogShapes.dogShape),
    employees: PropTypes.arrayOf(employeeShape),
    toggleNew: PropTypes.func.isRequired,
  }

  state = {
    doggoValue: '',
    employeeValue: '',
    dateValue: moment().format('YYYY-MM-DD'),
    timeValue: moment().format('HH:mm'),
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleModal = () => {
    const { toggleNew } = this.props;
    toggleNew();
  }

  handleNewWalkSubmit = (e) => {
    const { addNewWalk } = this.props;
    e.preventDefault();
    const newDate = moment(this.state.dateValue, 'YYYY-MM-DD').format('YYYYMMDD');
    const newTime = moment(this.state.timeValue, 'HH:mm').format('HHmm');
    const newDateAndTime = `${newDate}T${newTime}`;
    const newWalk = {
      dogId: this.state.doggoValue,
      employeeId: this.state.employeeValue,
      date: newDateAndTime,
    };
    addNewWalk(newWalk);
    this.toggleModal();
  }


  render() {
    const { dateValue, timeValue } = this.state;
    const { dogs, employees } = this.props;

    return (
      <div>
      <Form onSubmit={this.handleNewWalkSubmit}>
      <ModalBody>
          <FormGroup>
            <Label for="doggoSelection">Select Doggo</Label>
            <Input type="select" name="doggoValue" id="doggoSelection" onChange={this.handleChange} required>
            <option value="">Select a dog</option>
              { dogs.map(object => (
                <option key={object.id} value={object.id}>{object.name}</option>
              )) }
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="employeeSelection">Select Walker</Label>
            <Input type="select" name="employeeValue" id="employeeSelection" value={this.state.employeeValue} onChange={this.handleChange} required>
              <option value="">Select an employee</option>
            { employees.map(object => (
                <option key={object.id} value={object.id}>{object.name}</option>
            )) }
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="walkDate">Date</Label>
            <Input
              type="date"
              name="dateValue"
              id="walkDate"
              value={dateValue}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="walkTime">Time</Label>
            <Input
              type="time"
              name="timeValue"
              id="walkTime"
              value={timeValue}
              onChange={this.handleChange}
            />
          </FormGroup>
       </ModalBody>
       <ModalFooter>
         <Button type="submit" color="primary">Add Walk</Button>{' '}
         <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
       </ModalFooter>
       </Form>
       </div>
    );
  }
}

export default NewWalkForm;
