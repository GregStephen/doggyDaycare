import React from 'react';

import myDogs from './dogs';
import DogPen from '../components/DogPen/DogPen';
import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    this.setState({ dogs: myDogs });
  }

  render() {
    const { dogs } = this.state;
    return (
      <div className="App">
        <DogPen dogs={ dogs } />
      </div>
    );
  }
}

export default App;
