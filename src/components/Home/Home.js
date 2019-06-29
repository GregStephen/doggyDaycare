import React from 'react';

import DogPen from '../DogPen/DogPen';
import Breakroom from '../Breakroom/Breakroom';
import Walks from '../Walks/Walks';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home container">
        <DogPen />
        <Breakroom />
        < Walks />
      </div>
    );
  }
}

export default Home;
