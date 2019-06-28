import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
// import PropTypes from 'prop-types';

import dogData from '../../helpers/data/dogData';
// import dogShape from '../../helpers/propz/dogShape';
import Dog from '../Dog/Dog';
import './DogPen.scss';

class DogPen extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    dogData.getDogs()
      .then(dogs => this.setState({ dogs }))
      .catch(err => console.error('could not get dogs', err));
  }

  render() {
    const { dogs } = this.state;
    const makeDogs = dogs.map(dog => (
      <Dog key={ dog.id } dog={ dog } />
    ));

    return (
      <div className="DogPen container">
        <h2>Check Out Our Sweet Pups</h2>
        <div className="card-columns">
          { makeDogs }
        </div>
      </div>
    );
  }
}

export default DogPen;
