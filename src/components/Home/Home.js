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

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('could not get dogs', err));
    employeeData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('could not get employees', err));
    this.getWalkData();
  }

  deleteWalk = (walkId) => {
    walkData.deleteWalkFromDatabase(walkId)
      .then(() => this.getWalkData)
      .catch(err => console.error('trouble deleting walk', err));
  }

  addNewWalk = (newWalk) => {
    walkData.addNewWalkToDatabase(newWalk)
      .then(() => this.getWalkData)
      .catch(err => console.error('trouble adding new walk', err));
  }

  render() {
    const { walks, dogs, employees } = this.state;
    return (
      <div className="Home container">
        <DogPen dogs={ dogs }/>
        <Breakroom employees={ employees }/>
        <Walks walks={ walks } employees={ employees } dogs={ dogs } addNewWalk={this.addNewWalk} deleteWalk={this.deleteWalk}/>
      </div>
    );
  }
}

export default Home;
