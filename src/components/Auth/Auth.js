import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';


import './Auth.scss';

class Auth extends React.Component {
  logInClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div className="Auth container">
        <div className="row">
        <div className="col-10 offset-1 mt-3">
          <h2>Welcome to Doggy Daycare</h2>
          <h2>The #1 site to keep track of your employees, your dogs and schedule their walks</h2>
        </div>
          <div className="col-12" >
            <img className="auth-page-dog" src="https://quantockvets.co.uk/wp-content/uploads/2016/01/Pet-health-care-banner-1.jpg"
            alt="cool looking pup hanging his face out a window"></img>
          </div>
          <div className="auth-button col-4 col-md-2 mt-5">
          <button className="btn btn-outline-danger" onClick={this.logInClickEvent}>Log in with Google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
