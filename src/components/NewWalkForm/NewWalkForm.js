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
  }

  state = {
    doggoValue: '',
    employeeValue: '',
    dateValue: moment().format('YYYY-MM-D'),
    timeValue: moment().format('HH:mm'),
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleModal = () => {
    const { toggle } = this.props;
    toggle();
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
            <Input type="select" name="doggoValue" id="doggoSelection" value={this.state.doggoValue} onChange={this.handleChange}>
              { dogs.map(object => (
                <option key={object.id} value={object.id}>{object.name}</option>
              )) }
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="employeeSelection">Select Walker</Label>
            <Input type="select" name="employeeValue" id="employeeSelection" value={this.state.employeeValue} onChange={this.handleChange}>
            { employees.map(object => (
                <option key={object.id} value={object.id}>{object.name}</option>
            )) }
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="dateValue"
              id="exampleDate"
              value={dateValue}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              type="time"
              name="timeValue"
              id="exampleTime"
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
