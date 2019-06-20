import React from 'react';

import myDogs from './dogs';
import DogPen from '../components/DogPen/DogPen';
import myEmployees from './employees';
import Breakroom from '../components/Breakroom/Breakroom';
import './App.scss';

class App extends React.Component {
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
      <div className="App">
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

export default App;
