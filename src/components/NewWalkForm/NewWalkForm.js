import React from 'react';
import {
  Form, FormGroup, Label, Input, ModalBody, ModalFooter, Button,
} from 'reactstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const moment = require('moment');

class NewWalkForm extends React.Component {
  static propTypes = {
    addNewWalk: PropTypes.func.isRequired,
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
    const newDate = `${this.state.dateValue}T${this.state.timeValue}`;
    const newWalk = {
      doggoId: this.state.doggoValue,
      employeeId: this.state.employeeValue,
      dateValue: newDate,
    };
    addNewWalk(newWalk);
    this.toggleModal();
  }


  render() {
    const { dateValue, timeValue } = this.state;
    return (
      <div>
      <Form onSubmit={this.handleNewWalkSubmit}>
      <ModalBody>

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
