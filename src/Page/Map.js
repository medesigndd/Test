import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


Geocode.setApiKey(" AIzaSyBrarTsUjcPrHWIHJ-sQ9wrYNvvcdG3q0s ");
Geocode.enableDebug();

class Map extends React.Component{

  handleScriptLoad() {
    const inputEl = document.getElementById('address-input');

    /*global google*/
    var options = {
        //types: ['address'],
        componentRestrictions: {country: 'by'}
    };
    this.autocomplete = new google.maps.places.Autocomplete(inputEl, options);
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect.bind(this));
}

handlePlaceSelect() {
    console.log(this.autocomplete.getPlace());
}
    

constructor( props ){
  super( props );
  this.state = {
   address: '',
   city: '',
   area: '',
   state: '',
   mapPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng
   },
   markerPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng

}
  }
 }

/**
  * Get the current address from the default map position and set those values in the state
  */
 componentDidMount() {
  Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
   response => {
       console.log( 'res', response );
    const address = response.results[0].formatted_address,
     addressArray =  response.results[0].address_components,
     city = this.getCity( addressArray ),
     area = this.getArea( addressArray ),
     state = this.getState( addressArray );
  
    console.log( 'city', city, area, state );
  
    this.setState( {
     address: ( address ) ? address : '',
     area: ( area ) ? area : '',
     city: ( city ) ? city : '',
     state: ( state ) ? state : '',
    } )
   },
   error => {
    console.error(error);
   }
  );
 };

/**
  * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
  *
  * @param nextProps
  * @param nextState
  * @return {boolean}
  */
 shouldComponentUpdate( nextProps, nextState ){
  if (
   this.state.markerPosition.lat !== this.props.center.lat ||
   this.state.address !== nextState.address ||
   this.state.city !== nextState.city ||
   this.state.area !== nextState.area ||
   this.state.state !== nextState.state
  ) {
   return true
  } else if ( this.props.center.lat === nextProps.center.lat ){
   return false
  }
 }


/**
  * Get the area and set the area input value to the one selected
  *
  * @param addressArray
  * @return {string}
  */
 getArea = ( addressArray ) => {
  let area = '';
  for( let i = 0; i < addressArray.length; i++ ) {
   if ( addressArray[ i ].types[0]  ) {
    for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
     if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
      area = addressArray[ i ].long_name;
      return area;
     }
    }
   }
  }
 };


/**
  * And function for city,state and address input
  * @param event
  */
 onChange = ( event ) => {
  this.setState({ [event.target.name]: event.target.value });
 };

/**
  * This Event triggers when the marker window is closed
  *
  * @param event
  */
 onInfoWindowClose = ( event ) => {

};

render(){

const AsyncMap = withScriptjs(
   withGoogleMap(
    props => (
     <GoogleMap google={this.props.google}
      defaultZoom={this.props.zoom}
      defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
     >

</GoogleMap>

)
   )
  );

let map;
  if( this.props.center.lat !== undefined ) {
   map = <div>
     <div><br></br>
      <div className="form-group" align="center">
       
      <Button variant="contained" color="primary"> 
                  <Link color="inherit" href="/map.html">
                    ค้นหา ร้านอาหาร เขตบางซื่อ กทม
                  </Link>
                  </Button>
      </div>
      
     </div>
     <AsyncMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBrarTsUjcPrHWIHJ-sQ9wrYNvvcdG3q0s&libraries=places"
      loadingElement={
       <div style={{ height: `100%` }} />
      }
      containerElement={
       <div style={{ height: this.props.height }} />
      }
      mapElement={
       <div style={{ height: `100%` }} />
      }
     />
    </div>

} else {
   map = <div style={{height: this.props.height}} />
  }
  return( map )
 }
}

export default Map