import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Footer />
    </React.Fragment>
  );
}