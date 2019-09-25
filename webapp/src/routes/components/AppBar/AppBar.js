import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { changeLocation } from 'modules/component-props';

import { connectProps } from 'store';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Bar = ( props ) => {
  const { classes, changeLocation } = props;
  return (
    <div style={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" style={styles.grow}>
            <Button onClick={() => changeLocation('/') } color="inherit"></Button>
          </Typography>
          <Button onClick={() => changeLocation('/signup') } color="inherit">Signup</Button>
          <Button onClick={() => changeLocation('/login') } color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Bar.propTypes = {
  // classes: PropTypes.object.isRequired,
  changeLocation: PropTypes.func.isRequired
};

export default connectProps(changeLocation)(Bar);
