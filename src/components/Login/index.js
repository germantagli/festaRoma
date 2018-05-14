// Dependencies
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import './login.css';

class Login extends Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <RaisedButton
        label="Conferma"
        primary={true}
        onClick={this.handleClose}
      />
    ];
    return (
      <div className="Login">
        <Card>
          <CardMedia overlay={<CardTitle title="Login" subtitle="Benvenuto al Portale di Feste" />}></CardMedia>
          <CardText>
            <div><TextField/></div>{/* nombre de utente */}
            <div><TextField/></div>{/* contrasena */}
          </CardText>
          <CardActions> 
              <RaisedButton label="Registrazione" onClick={this.handleOpen} secondary={true}/>
              <RaisedButton label="Login" primary={true} /> 
          </CardActions>
        </Card>
        <Dialog
          title="Registrazione"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div><TextField/></div>{/* nombre de utente */}
          <div><TextField/></div>{/* contrasena */}
          <div><TextField/></div>{/* contrasena */}
          <div><TextField/></div>{/* contrasena */}
        
        </Dialog>
      </div>
    );
  }
}

export default Login;