import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


class Footer extends Component{
  render(){
    return (
      <React.Fragment>
       <footer class="makeStyles-heroContent-2">
        <Typography  align="center" gutterBottom>
        <Link color="inherit" href="/">Home</Link> : 
        <Link color="inherit" href="/value"> Next Value</Link> : 
        <Link color="inherit" href="/place"> Place Map Search</Link>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        © Copyright 2019 
        </Typography>
      </footer>
     </React.Fragment>
    );
  }
}
export default Footer;