import React, { Component } from 'react';
import Map from './Map';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class Place extends Component {

	render() {
		return(
			<div  class="makeStyles-heroContent-2">			
				<Header />		
				<div class="makeStyles-heroContent-2">
	<Map
     google={this.props.google}
     center={{lat: 13.8132763, lng: 100.5371034}}
     height='500px'
	 zoom={15}/>
	 </div>
    <Footer />
			</div>
		);
	}
}

export default Place;