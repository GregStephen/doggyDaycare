import React from 'react';
import {
  Form, Row, FormGroup, Label, Input, ModalBody, ModalFooter, Button, Col,
} from 'reactstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import dogShapes from '../../helpers/propz/dogShape';

class NewDogForm extends React.Component {
  static propTypes = {
    addNewDog: PropTypes.func.isRequired,
    dogs: PropTypes.arrayOf(dogShapes.dogShape),
    toggleNewDog: PropTypes.func.isRequired,
  }

  state = {
    dogName: '',
    dogBreed: '',
    dogColor: '',
    dogAge: 1,
    dogImage: '',
    dogSex: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleModal = () => {
    const { toggleNewDog } = this.props;
    toggleNewDog();
  }

  handleNewDogSubmit = (e) => {
    const { addNewDog } = this.props;
    e.preventDefault();
    const newDog = {
      name: this.state.dogName,
      color: this.state.dogColor,
      breed: this.state.dogBreed,
      sex: this.state.dogSex,
      imageUrl: this.state.dogImage,
      age: parseInt(this.state.dogAge, 10),
    };
    addNewDog(newDog);
    this.toggleModal();
  }


  render() {
    return (
      <div>
      <Form onSubmit={this.handleNewDogSubmit}>
      <ModalBody>
          <FormGroup row>
            <Label for="dogName" sm={2}>Name:</Label>
            <Col sm={10}>
              <Input type="input" name="dogName" placeholder="Fido" id="dogName" value={this.state.dogName} onChange={this.handleChange} required>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="dogImage" sm={2}>Pic:</Label>
            <Col sm={10}>
            <Input
              type="input"
              name="dogImage"
              id="dogImage"
              placeholder="Url Link To The Pup's Pic"
              onChange={this.handleChange}
            />
            </Col>
          </FormGroup>
          <Row form>
            <Col sm={8}>
              <FormGroup row>
                <Label sm={3} for="dogBreed">Breed:</Label>
                <Col sm={9}>
                  <Input type="input" placeholder="Basset Hound" name="dogBreed" id="dogBreed" value={this.state.dogBreed} onChange={this.handleChange} required>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup row>
                <Label sm={3} for="dogAge">Age:</Label>
                <Col sm={9}>
                  <Input type="number" name="dogAge" min="1" id="dogAge" value={this.state.dogAge} onChange={this.handleChange} required>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm={8}>
              <FormGroup row>
                <Label for="dogColor" sm={3}>Color:</Label>
                <Col sm={9}>
                  <Input type="input" placeholder="Brown and White" name="dogColor" id="dogColor" value={this.state.dogColor} onChange={this.handleChange} required>
                  </Input>
                </Col>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup row>
                <Label sm={3} for="dogSex">Sex:</Label>
                <Col sm={9}>
                  <Input type="select" name="dogSex" id="dogSex" value={this.state.dogSex} onChange={this.handleChange} required>
                  <option value="">Sex of Dog</option>
                  <option value="M">M</option>
                  <option value="F">F</option>
                   </Input>
                </Col>
              </FormGroup>
            </Col>
          </Row>
       </ModalBody>
       <ModalFooter>
         <Button type="submit" color="primary">Add Dog!</Button>{' '}
         <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
       </ModalFooter>
       </Form>
       </div>
    );
  }
}

export default NewDogForm;
