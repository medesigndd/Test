import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

class Header extends Component {
  render() {
    
    return (
      <React.Fragment>
        <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          <Link color="inherit" href="/">Test</Link>
          </Typography>
        </Toolbar>
      </AppBar>

            <div class="makeStyles-heroContent-2">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              <br></br>
              Hi I'm Todd
            </Typography>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Link to="/test">
                  <Button variant="contained" color="primary">
                  <Link color="inherit" href="/value">
                    Next Value
                  </Link>
                  </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                  <Link color="inherit" href="/place">
                    Place Map API
                  </Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
            
      </React.Fragment>
    );
  }
}

export default Header;