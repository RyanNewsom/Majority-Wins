import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    marginRight: 16,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.navLink} to="/">
              Majority Wins™
            </Link>
          </Typography>
          <Button
            className={classes.navButton}
            color="inherit"
            onClick={() => {
              history.push('/voters');
            }}
            variant="outlined"
          >
            Register Voters
          </Button>
          <Button
            className={classes.navButton}
            variant="outlined"
            color="inherit"
            onClick={() => {
              history.push('/capturevotes');
            }}
          >
            Capture Votes
          </Button>
          <Button
            className={classes.navButton}
            variant="outlined"
            color="inherit"
            onClick={() => {
              history.push('/elections');
            }}
          >
            Election Creation
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
