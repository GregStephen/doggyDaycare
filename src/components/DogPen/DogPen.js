import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import Dog from '../Dog/Dog';
import dogShape from '../../helpers/propz/dogShape';
import './DogPen.scss';

class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const { dogs } = this.props;
    const makeDogs = dogs.map(dog => (
      <Dog key={ dog.id } dog={ dog } />
    ));

    return (
      <div className="DogPen container Pages">
        <h2>Check Out Our Sweet Pups</h2>
        <div className="card-columns">
          { makeDogs }
        </div>
      </div>
    );
  }
}

export default DogPen;
