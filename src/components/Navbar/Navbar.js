import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './Navbar.scss';

class Navbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  showWalks = (e) => {
    e.preventDefault();
    $('.Walks').removeClass('hide');
    $('.DogPen').addClass('hide');
    $('.Breakroom').addClass('hide');
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">Doggy Daycare</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {authed ? (
                <div>
              <button className="btn btn-outline-info my-2 my-sm-0 mr-3" onClick={this.showWalks}>Walks</button>
              <button className="btn btn-outline-danger my-2 my-sm-0" onClick={this.logMeOut}>Log Out</button>
                </div>
              ) : (
                ''
              )}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
