import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import dogShape from '../../helpers/propz/dogShape';

import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dog: dogShape.dogShape,
    checkoutDogFromDayCare: PropTypes.func.isRequired,
  }

  checkThatDogOut = (e) => {
    const { dog, checkoutDogFromDayCare } = this.props;
    checkoutDogFromDayCare(dog.id);
  }

  render() {
    const { dog } = this.props;
    return (
      <div className="Dog col-12 mb-2">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="dog-image img-fluid" src={dog.imageUrl} alt='It is a cute pup'></img>
              <button className="btn btn-outline-danger checkout-btn" onClick={this.checkThatDogOut}>Check Dog Out</button>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{dog.name}</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Breed: {dog.breed}</li>
                  <li className="list-group-item">Color: {dog.color}</li>
                  <li className="list-group-item">Sex: {dog.sex}</li>
                  <li className="list-group-item"> Age: {dog.age}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
