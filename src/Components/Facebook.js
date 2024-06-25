import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userId: '',
      name: '',
      email: '',
      picture: ''
    };

    // Binding methods
    this.responseFacebook = this.responseFacebook.bind(this);
    this.componentClicked = this.componentClicked.bind(this);
  }

  responseFacebook(response) {
    console.log(response);
    this.setState({
      isLoggedIn: true,
      userId: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  }

  componentClicked() {
    console.log("clicked!");
  }

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          <p>Email: {this.state.email}</p>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="189486938370592"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return (
      <div>{fbContent}</div>
    );
  }
}

export default Facebook;
