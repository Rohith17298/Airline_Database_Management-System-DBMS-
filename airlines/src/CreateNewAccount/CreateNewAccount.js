import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../Login/Login.css';
import { connect } from "react-redux";
import { setUser } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    }
}));

function CreateNewAccount(props) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [address, setAddress] = React.useState('');
    const classes = useStyles();

    const onBlurHandler = v => {
        fetch('http://localhost:5000/loginpage/checkemail', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: `'${v}'`
            })
        }).then(res => res.json()).then(data => {
            console.log('flghts', data)
            if (data.res.length > 0) {
                setEmailError('Email already exists.')
            } else {
                setEmailError('')
            }
        })
    }

    const signUp = () => {
        fetch('http://localhost:5000/loginpage/signup', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                CustomerName: `'${username}'`,
                Email: `'${email}'`,
                CustomerAddress: `'${address}'`,
                Password: `'${password}'`
            })
        }).then(res => res.json()).then(data => {
            console.log('flghts', data)
            if (data.res) {
                props.setUser({
                    cname: username,
                    email,
                    address,
                    password
                })
                props.history.push('/billing')
            }
        })

    }

    return <React.Fragment>
        <div className="login">
            <h3>Create your account.</h3>
            <h5>Enter your Name:</h5>
            <TextField
                value={username}
                id="outlined-error-helper-text"
                label="Name"
                variant="outlined"
                onChange={e => setUsername(e.target.value)}
            />
            <h5>Enter your email:</h5>
            <TextField
                error={emailError}
                value={email}
                id="outlined-error-helper-text"
                label="Email"
                helperText={emailError}
                variant="outlined"
                onChange={e => setEmail(e.target.value)}
                onBlur={(e) => onBlurHandler(e.target.value)}
            />
            <h5>Enter your Address:</h5>
            <TextField
                value={address}
                id="outlined-error-helper-text"
                label="Address"
                variant="outlined"
                onChange={e => setAddress(e.target.value)}
            />
            <h5>Enter your password:</h5>
            <TextField
                value={password}
                id="outlined-error-helper-text"
                label="Password"
                variant="outlined"
                onChange={e => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary"
                className={classes.button}
                disabled={!(username && email && address && password) && emailError}
                onClick={() => signUp()}
            >
                Sign Up
            </Button>
        </div>
    </React.Fragment>;
}

const mapDispatchToProps = dispatch => ({
    setUser: (payload) => dispatch(setUser(payload))
});

export default connect(null, mapDispatchToProps)(CreateNewAccount);
