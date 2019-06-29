import React from 'react';
import walkData from '../../helpers/data/walkData';
import Walk from '../Walk/Walk';
import './Walks.scss';

class Walks extends React.Component {
  state = {
    walks: [],
  }

  componentDidMount() {
    walkData.getWalks()
      .then(walks => this.setState({ walks }))
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
