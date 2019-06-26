import React from 'react';

import dogData from '../../helpers/data/dogData';
import DogPen from '../DogPen/DogPen';
import employeeData from '../../helpers/data/employeeData';
import Breakroom from '../Breakroom/Breakroom';

import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('could not get dogs', err));
    employeeData.getEmployees()
      .then(employees => this.setState({ employees }))
      .catch(err => console.error('could not get employees', err));
  }

  render() {
    const { dogs, employees } = this.state;
    return (
      <div className="Home container">
         <div>
          <h2>Check Out Our Sweet Pups</h2>
         <DogPen dogs={ dogs } />
        </div>
        <div>
          <h2>Check Out Our Sweet Care Takers</h2>
          <Breakroom employees={ employees } />
        </div>
      </div>
    );
  }
}

export default Home;
