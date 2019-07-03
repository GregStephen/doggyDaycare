/* eslint-disable max-len */
import React from 'react';

import DogPen from '../DogPen/DogPen';
import Breakroom from '../Breakroom/Breakroom';
import Walks from '../Walks/Walks';

import dogData from '../../helpers/data/dogData';
import employeeData from '../../helpers/data/employeeData';
import walkData from '../../helpers/data/walkData';

import SMASH from '../../helpers/smash';

import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
  }

  getWalkData = () => {
    walkData.getWalks()
      .then((walkResp) => {
        walkResp.sort((a, b) => {
          const aDate = a.date;
          const bDate = b.date;
          // eslint-disable-next-line no-nested-ternary
          return aDate < bDate ? -1 : aDate > bDate ? 1 : 0;
        });
        employeeData.getEmployees()
          .then((employees) => {
            const walksWithEmployees = SMASH.walkEmployee(walkResp, employees);
            dogData.getDogs()
              .then((doggos) => {
                const walks = SMASH.walkDoggo(walksWithEmployees, doggos);
                this.setState({ walks });
              });
          });
      })
      .catch(err => console.error('couldnt get walks', err));
  }

  getDogData = () => {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('could not get dogs', err));
  }

  getEmployeeData = () => {
    employeeData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('could not get employees', err));
  }

  componentDidMount() {
    this.getDogData();
    this.getEmployeeData();
    this.getWalkData();
  }

  deleteWalk = (walkId) => {
    walkData.deleteWalkFromDatabase(walkId)
      .then(() => this.getWalkData())
      .catch(err => console.error('trouble deleting walk', err));
  }

  addNewWalk = (newWalk) => {
    walkData.addNewWalkToDatabase(newWalk)
      .then(() => this.getWalkData())
      .catch(err => console.error('trouble adding new walk', err));
  }

  editWalk = (editedWalk, walkId) => {
    walkData.editWalkOnDatabase(editedWalk, walkId)
      .then(() => this.getWalkData())
      .catch(err => console.error('trouble editing walk', err));
  }

  addNewDog = (dogObject) => {
    dogData.addNewDogToDatabase(dogObject)
      .then(() => this.getDogData())
      .catch(err => console.error('trouble adding dog', err));
  }

  checkoutDogFromDayCare = (dogId) => {
    dogData.deleteDogFromDatabase(dogId)
      .then(() => this.getDogData())
      .catch(err => console.error('trouble checking out a dog', err));
  }

  fireEmployee = (employeeId) => {
    employeeData.deleteEmployeeFromDatabase(employeeId)
      .then(() => this.getEmployeeData())
      .catch(err => console.error('trouble firing employee', err));
  }

  render() {
    const { walks, dogs, employees } = this.state;
    return (
      <div className="Home container">
        <div className="row">
        <DogPen
        dogs={ dogs }
        addNewDog={ this.addNewDog }
        checkoutDogFromDayCare={ this.checkoutDogFromDayCare }
        />
        <Breakroom
        employees={ employees }
        fireEmployee={ this.fireEmployee}
        />
        </div>
        <Walks
        walks={ walks }
        employees={ employees }
        dogs={ dogs }
        addNewWalk={this.addNewWalk}
        deleteWalk={this.deleteWalk}
        editWalk={this.editWalk}/>
      </div>
    );
  }
}

export default Home;
