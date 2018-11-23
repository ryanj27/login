import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Avatar, Button, Checkbox, CssBaseline, FormControl, FormControlLabel, Input, InputLabel, Paper, Typography, withStyles } from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing.unit,
  },
  form: {
    marginTop: theme.spacing.unit,
    width: '100%'
  },
  layout: {
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 400
    },
    width: 'auto'
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    marginTop: theme.spacing.unit * 8
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class App extends Component {

  constructor(props) {

    super(props);
    console.log('Constructor called');

    this.state = {
      canSubmit: false,
      username: '',
      password: '',
      rememberMe: false
    };
  }


  // LIFECYCLE METHODS //
  ///////////////////////
  componentWillMount() {
    console.log('componentWillMount called');
  }

  componentDidMount() {
    console.log('componentDidMount called');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps called');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate called');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }

  // END LIFECYCLE METHODS //
  ///////////////////////////

  disableButton = () => {
    this.setState({canSubmit: false});
  };

  enableButton = () => {
    this.setState({canSubmit: true});
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value});
  };

  onSubmit = (model) => {
    // console.info('submit': model);
  };

  render() {
    console.log('Render called');

    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>

          <Paper className={classes.paper}>

            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>

            <Typography component='h1' variant='h5'>
              SIGN IN
            </Typography>

            <form className={classes.form}>

              <FormControl margin='normal' required fullWidth>
                <InputLabel htmlFor='username'>Username</InputLabel>
                <Input
                  id='username'
                  name='username'
                  value={this.state.value}
                  autoComplete='username'
                  onChange={this.handleChange}
                  autoFocus
                />
              </FormControl>

              <FormControl margin='normal' required fullWidth>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  onChange={this.handleChange}
                />
              </FormControl>

              <FormControlLabel
                control={<Checkbox value='rememberMe' color='primary' />}
                label='Remember Me'
              ></FormControlLabel>

              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                SIGN IN
              </Button>

            </form>

          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);