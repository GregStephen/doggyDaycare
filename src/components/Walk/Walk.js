import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  ModalBody, ModalFooter, Button, FormGroup, Label, Input,
} from 'reactstrap';
import moment from 'moment';
import walkShape from '../../helpers/propz/walkShape';

import './Walk.scss';

class Walk extends React.Component {
  state = {
    doggoValue: '',
    employeeValue: '',
    dateValue: '',
    timeValue: '',
    walkToEdit: {},
  }

  static propTypes = {
    walk: walkShape,
    deleteWalk: PropTypes.func.isRequired,
    editWalk: PropTypes.func.isRequired,
    toggleEdit: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.setState({
      dateValue: moment(this.props.walk.date).format('YYYY-MM-DD'),
      timeValue: moment(this.props.walk.date).format('HH:mm'),
      doggoValue: this.props.walk.dogId,
      employeeValue: this.props.walk.employeeId,
      walkToEdit: { ...this.props.walk },
    });
  }

  deleteWalkEvent = (e) => {
    const { walk, deleteWalk } = this.props;
    e.preventDefault();
    deleteWalk(walk.id);
  }

  toggleModal = () => {
    const { toggleEdit } = this.props;
    toggleEdit();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDogChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    const dog = this.props.dogs.find(x => x.id === e.target.value);
    const newDogStuff = { ...this.state.walkToEdit };
    newDogStuff.dogId = dog.id;
    newDogStuff.doggoName = dog.name;
    newDogStuff.doggoImage = dog.imageUrl;
    this.setState({ walkToEdit: newDogStuff });
  };

  handleEmployeeChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    const employee = this.props.employees.find(x => x.id === e.target.value);
    const newEmployeeStuff = { ...this.state.walkToEdit };
    newEmployeeStuff.employeeId = employee.id;
    newEmployeeStuff.employeeName = employee.name;
    newEmployeeStuff.employeeImage = employee.imageUrl;
    this.setState({ walkToEdit: newEmployeeStuff });
  }

  editTheWalk = (e) => {
    e.preventDefault();
    const { editWalk, walk } = this.props;
    editWalk(this.state.walkToEdit, walk.id);
    this.toggleModal();
  };

  render() {
    const { dogs, employees } = this.props;
    const {
      dateValue, timeValue, walkToEdit, doggoValue, employeeValue,
    } = this.state;
    return (
      <div>
        <ModalBody>
        <div className="Walk col-12">
        <div className="card">
        <div className="card-body">
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
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><img className="walk-employee-image"src={walkToEdit.employeeImage} alt={walkToEdit.employeeName}></img></li>
            <FormGroup>
              <Label for="employeeSelection"></Label>
              <Input type="select" name="employeeValue" id="employeeSelection" value={this.state.employeeValue} onChange={this.handleEmployeeChange} required>
                <option
                value={employeeValue}>{walkToEdit.employeeName}</option>
              { employees.map(object => (
                object.id === employeeValue ? ('')
                  : (
                <option key={object.id} value={object.id}>{object.name}</option>
                  )
              )) }
              </Input>
            </FormGroup>
            <li className="list-group-item"><img className="walk-doggo-image"src={walkToEdit.doggoImage} alt={walkToEdit.doggoName}></img></li>
            <FormGroup>
              <Label for="doggoSelection"></Label>
              <Input type="select" name="doggoValue" id="doggoSelection" onChange={this.handleDogChange} required>
                <option
                value={doggoValue}>{walkToEdit.doggoName}</option>
                { dogs.map(object => (
                  object.id === doggoValue ? ('') : (
                    <option key={object.id} value={object.id}>{object.name}</option>
                  )
                )) }
              </Input>
            </FormGroup>
            <li className="list-group-item"><button className="btn btn-danger" onClick={this.deleteWalkEvent}>DELETE THIS WALK</button></li>
          </ul>
        </div>
        </div>
      </div>
      </ModalBody>
       <ModalFooter>
         <Button type="submit" color="primary" onClick={this.editTheWalk}>Edit Walk</Button>{' '}
         <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
       </ModalFooter>
    </div>
    );
  }
}

export default Walk;
