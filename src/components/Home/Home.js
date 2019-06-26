import React from 'react';

import myDogs from '../../App/dogs';
import DogPen from '../DogPen/DogPen';
import myEmployees from '../../App/employees';
import Breakroom from '../Breakroom/Breakroom';

import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs, employees: myEmployees });
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
