import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { setUser } from '../redux/actions';
import './ConfirmReservation.css'
const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    }
}));

function ConfirmReservation({
    userDetails,
    history,
    source,
    destination,
    departure,
    returnDate,
    departureFlight,
    flightReturn,
    ticketQuantity
}) {
    const classes = useStyles();
    console.log('flight return ', flightReturn)
    return <div>
        <h3>Confirm Reservation for {flightReturn ? 'Round trip journey' : 'One-way trip'}.</h3>
        <div className="confirm">
            <span>Name: {userDetails.cname}</span>
            <span>Address: {userDetails.address}</span>
            <span>Email: {userDetails.email}</span>
            <span>Source: {source.title}</span>
            <span>Destination: {destination.title}</span>
            <span>Departure Date: {departure}</span>
            <span>Departure Fight: {departureFlight.fid}</span>
            {flightReturn && <React.Fragment>
                <span>Return Date: {returnDate}</span>
                <span>Return Flight: {flightReturn.fid}</span>
            </React.Fragment>}
            <span>Number of tickets: {ticketQuantity}</span>

        </div>
        <Button variant="contained" color="primary"
            className={classes.button}
            onClick={() => history.push('/Submit')}
        >
            Submit Order
        </Button>
    </div>;
}

const mapStateToProps = state => ({
    userDetails: state.airline.userDetails,
    source: state.airline.source,
    destination: state.airline.destination,
    departure: state.airline.departure,
    returnDate: state.airline.return,
    departureFlight: state.airline.departureFlight,
    flightReturn: state.airline.returnFlight,
    ticketQuantity: state.airline.ticketQuantity
});

const mapDispatchToProps = dispatch => ({
    setUser: (payload) => dispatch(setUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmReservation);
