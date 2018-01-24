import React, { Component } from 'react';
import LandingImage from '../retrospect.png'

class Landing extends Component {

  render() {
    return (
      <div>
        <img className="landing_image" src={LandingImage} alt="" />
       </div>
    )
  }
};

export default Landing
