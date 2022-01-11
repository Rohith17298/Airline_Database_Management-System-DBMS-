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

function Billing(props) {
    const [creditCardNumber, setCreditCardNumber] = React.useState('');
    const [creditCardNumberError, setCreditCardNumberError] = React.useState('');
    const [expiryDate, setExpiryDate] = React.useState('');
    // const [expiryDateError, setExpiryDateError] = React.useState('');

    const classes = useStyles();

    const creditCard = v => {
        if (v.length !== 16) {
            setCreditCardNumberError('Enter Valid Credit card number')
        } else {
            setCreditCardNumberError('')
        }
    }
    const confirm = () => {
        props.setUser({
            ...props.userDetails,
            creditCardNumber,
            expiryDate
        })
        props.history.push('/confirm')
    }
    return <React.Fragment>
        <div className="login">
            <h3>Hello {props.userDetails.cname} !!</h3>
            <h5>Enter your Credit Card Number:</h5>
            <TextField
                error={creditCardNumberError}
                value={creditCardNumber}
                id="outlined-error-helper-text"
                label="Credit card number"
                helperText={creditCardNumberError}
                variant="outlined"
                onChange={e => setCreditCardNumber(e.target.value)}
                onBlur={e => creditCard(e.target.value)}
            />
            <h5>Enter card expiry date:</h5>
            <TextField
                error={false}
                value={expiryDate}
                id="outlined-error-helper-text"
                label="Expiry Date"
                helperText="Enter expiry date"
                variant="outlined"
                onChange={e => setExpiryDate(e.target.value)}
            />
            <Button variant="contained" color="primary"
                className={classes.button}
                disabled={!(creditCardNumber && expiryDate)}
                onClick={() => confirm()}
            >
                Confirm Billing
            </Button>
        </div>
    </React.Fragment>;
}

const mapStateToProps = state => ({
    userDetails: state.airline.userDetails
});

const mapDispatchToProps = dispatch => ({
    setUser: (payload) => dispatch(setUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Billing);