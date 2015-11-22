import React, { PropTypes, Component } from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Button from 'react-bootstrap/lib/Button';

class GoogleSigninButton extends Component {

  componentDidMount = () => {
    gapi.signin2.render('g-signin2', {
      'scope': 'profile email',
      'onsuccess': this.onSignIn
    });
  }

  onSignIn = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    this.setState({profile: profile});
    console.log(this.state);
  }

  signOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      this.setState({profile: {}});
      console.log('User signed out.');
    }).bind(this);
  }

  render() {
    if (this.state && this.state.profile) {
      return (
        <DropdownButton bsStyle="link" title={this.state.profile.getEmail()}>
          <MenuItem onClick={this.signOut}>Sign out</MenuItem>
        </DropdownButton>
      )
    }
    return (
      <div id="g-signin2" data-onsuccess={this.onSignIn}></div>
    );
  }

}

export default GoogleSigninButton;
