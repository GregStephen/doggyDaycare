import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader,
} from 'reactstrap';

import Dog from '../Dog/Dog';
import NewDogForm from '../NewDogForm/NewDogForm';
import dogShape from '../../helpers/propz/dogShape';
import './DogPen.scss';

class DogPen extends React.Component {
  state = {
    newDogModal: false,
  }

  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    addNewDog: PropTypes.func.isRequired,
    checkoutDogFromDayCare: PropTypes.func.isRequired,
  }

  toggleNewDog = () => {
    this.setState(prevState => ({
      newDogModal: !prevState.newDogModal,
    }));
  }

  render() {
    const { dogs, addNewDog, checkoutDogFromDayCare } = this.props;
    const makeDogs = dogs.map(dog => (
      <Dog key={ dog.id } dog={ dog } checkoutDogFromDayCare={ checkoutDogFromDayCare }/>
    ));

    return (
      <div className="DogPen container Pages col-6">
        <h2 className="header">Your Sweet Pups</h2>
        <button className="btn btn-outline-info mb-4" onClick={this.toggleNewDog}>Check In New Pup!</button>
        <div className="row">
          { makeDogs }
        </div>
        <div>
          <Modal isOpen={this.state.newDogModal} toggle={this.toggleModal}
          className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add A Doggo!</ModalHeader>
            <NewDogForm
            toggleNewDog={this.toggleNewDog}
            addNewDog={ addNewDog }
            dogs={ dogs }
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default DogPen;
