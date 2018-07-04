import React, { Component } from 'react';
//import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';

class LandingPage extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	siteTitle: null,
		logo: ''

	  };

	}

	componentDidMount() {			

		//console.log( db.getImage('flamelink/media/1525896991891_logo.png') );

		db.getImage('flamelink/media/1525896991891_logo.png').then(snapshot =>

			this.setState({
				logo: snapshot
			})
			
	    );

	    db.getSiteTitle().then(snapshot =>


			this.setState({
				siteTitle: snapshot.val()
			})

	    );

	}

  render() {

    return (
	  <div>
	    <h1>Landing</h1>
	    <img src={ this.state.logo } alt="Restaurant" />
	    <p>{this.state.siteTitle}</p>
	    <p>The Landing Page is open to everyone, even though the user isn't signed in.</p>
	  </div>
    );
  }
}

export default LandingPage;
