import React from "react";
import {
Button,
TextField,
Grid,
Paper,
AppBar,
Typography,
Toolbar,
Link,
} from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import {NavLink, Redirect} from "react-router-dom";
import '../CSS/Login.css'
import hex2 from '../Components/hex2.png'

// import MyTheme from '../Components/MyTheme'

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  
  class Login extends React.Component {

      constructor(props) {
        super(props);
        this.state = { username: "", password:"",  authflag:1};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ username: event.state.username, password: event.state.password });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username == 'j@gmail.com' && this.state.password == '123') {
           return <Redirect to="/dashboard"/>
            // this.props.history.push("/dashboard");
        } else {
            alert('Incorrect Username or password.');
        }
    }
    render() {
        const { classes } = this.props;
    return (

    <div className="login-container">
        <Grid container spacing={0} justify="center" direction="row" >
        <Grid item>
        <Grid
        container
        direction="column"
        justify="center"
        spacing={2}
        className="login-form"
        >
        <Paper
        variant="elevation"
        elevation={10}
        className="login-background"
        style={{opacity: '0.85'}}
        >
        <Grid item >
        <Typography style={{display:'flex', flexDirection:"row", justifyContent:"center"}} component="h1" variant="h4" >
            <img  src={hex2} className="logo" alt="hex2" />
        </Typography>
        <Typography style={{display:'flex', flexDirection:"row", justifyContent:"center"}} component="h1" variant="h4" >
            <h1 className="login-logo-name">Log into My HQ</h1>
        </Typography>
        <br/>
        </Grid>
        <Grid item>
        <form onSubmit={this.handleSubmit} >
            <Grid container direction="column" spacing={2}>
            <Grid item>
            <TextField
            type="email"
            placeholder="Email"
            fullWidth
            name="username"
            variant="outlined"
            value={this.state.username}
            onChange={(event) =>
            this.setState({
            [event.target.name]: event.target.value,
            })
            }
            required
            autoFocus
            />
            </Grid>
            <Grid item>
            <TextField
                type="password"
                placeholder="Password"
                fullWidth
                name="password"
                variant="outlined"
                value={this.state.password}
                onChange={(event) =>
                this.setState({
                [event.target.name]: event.target.value,
            })
            }
            required
            />
            </Grid>
                <Grid item>
                    <NavLink to="/dashboard" style={{textDecoration: 'none'}}>
                        <Button
                        // color="primary"
                        variant="contained"
                        style={{backgroundColor: '#3BBA9C'}}
                        
                        // style={{ textDecoration: 'none' }}
                        // color="primary"
                        type="submit"
                        className="button-block"
                        >
                        Submit
                        </Button>
                    </NavLink >
                </Grid>
            </Grid>
        </form>
        </Grid>
        <Grid item>
        <Link href="#" variant="body2">Forgot Password?</Link>
        </Grid>
        </Paper>
        </Grid>
        </Grid>
        </Grid>
        </div>
    // </MuiThemeProvider>
    );
    }


}
export default Login;

