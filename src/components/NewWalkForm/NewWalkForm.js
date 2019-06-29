import React from 'react';
import {
  Form, FormGroup, Label, Input, ModalBody, ModalFooter, Button,
} from 'reactstrap';

const moment = require('moment');

class NewWalkForm extends React.Component {
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


  handleSubmit = (e) => {
    e.preventDefault();
    const newDate = `${this.state.dateValue}T${this.state.timeValue}`;
    const newWalk = {
      doggoId: this.state.doggoValue,
      employeeId: this.state.employeeValue,
      dateValue: newDate,
    };
    console.error(newWalk);
  }

  render() {
    const { dateValue, timeValue } = this.state;
    return (
      <div>
      <ModalBody>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="doggoSelection">Select Doggo</Label>
            <Input type="select" name="doggoValue" id="doggoSelection">
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="employeeSelection">Select Walker</Label>
            <Input type="select" name="employeeValue" id="employeeSelection">
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
        </Form>
       </ModalBody>
       <ModalFooter>
         <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
       </ModalFooter>
      </div>
    );
  }
}

export default NewWalkForm;
