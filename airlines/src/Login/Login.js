import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Login.css';
import { connect } from "react-redux";
import { setUser } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    }
}));

function Login(props) {
    const [username, setUsername] = React.useState('');
    const [userNameError, setUsernameError] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
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
            // console.log('flghts', data)
            if (data.res.length > 0) {
                setUsernameError('Username already exists.')
            }
        })
    }

    const login = () => {
        fetch('http://localhost:5000/loginpage', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: `'${username}'`,
                password: `'${password}'`
            })
        }).then(res => res.json()).then(data => {
            // console.log('flghts', data)
            if (data.res.length > 0) {
                props.setUser(data.res[0])
                props.history.push('/billing')
            }
        })

    }
    return <React.Fragment>
        <div className="login">
            <h3>Log into your account.</h3>
            <h5>Enter your Username/e-mail :</h5>
            <TextField
                error={Boolean(userNameError)}
                value={username}
                id="outlined-error-helper-text"
                label="Username"
                helperText={userNameError}
                variant="outlined"
                onChange={e => setUsername(e.target.value)}
                onBlur={e => onBlurHandler(e.target.value)}
            />
            <h5>Enter your password:</h5>
            <TextField
                error={Boolean(passwordError)}
                value={password}
                id="outlined-error-helper-text"
                label="Password"
                helperText={passwordError}
                variant="outlined"
                onChange={e => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary"
                className={classes.button}
                disabled={!(username && password)}
                onClick={() => login()}
            >
                login
            </Button>
            <h3>OR</h3>
            <div>
                <Button variant="contained" color="primary"
                    className={classes.button}
                    onClick={() => props.history.push('/create-new-account')}
                >
                    Create New Account
                </Button>
            </div>
        </div>
    </React.Fragment>;
}
const mapStateToProps = state => ({
    userDetails: state.airline.userDetails
});

const mapDispatchToProps = dispatch => ({
    setUser: (payload) => dispatch(setUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
