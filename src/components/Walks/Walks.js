import React from 'react';
import walkData from '../../helpers/data/walkData';
import employeeData from '../../helpers/data/employeeData';
import dogData from '../../helpers/data/dogData';
import Walk from '../Walk/Walk';
import SMASH from '../../helpers/smash';
import './Walks.scss';

class Walks extends React.Component {
  state = {
    walks: [],
  }

  componentDidMount() {
    walkData.getWalks()
      .then((walkResp) => {
        employeeData.getEmployees()
          .then((employees) => {
            const walksWithEmployees = SMASH.walkEmployee(walkResp, employees);
            dogData.getDogs()
              .then((doggos) => {
                const walks = SMASH.walkDoggo(walksWithEmployees, doggos);
                this.setState({ walks });
              });
          });
      })
      .catch(err => console.error('couldnt get walks', err));
  }

  render() {
    const { walks } = this.state;

    const showWalks = walks.map(walk => (
      <Walk key={ walk.id } walk={ walk } />
    ));

    return (
      <div className="Walks hide Pages">
        <h2>WALKS</h2>
        { showWalks }
      </div>
    );
  }
}

export default Walks;
