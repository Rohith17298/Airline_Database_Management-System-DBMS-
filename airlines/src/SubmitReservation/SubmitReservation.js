import React from 'react';
// import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { setUser } from '../redux/actions';
import '../ConfirmReservation/ConfirmReservation.css'

class SubmitReservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }
    componentDidMount() {
        const {
            userDetails,
            departureFlight,
            flightReturn,
            ticketQuantity
        } = this.props
        fetch('http://localhost:5000/checkoutpage', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dFlight: `'${departureFlight.fid}'`,
                rFlight: `'${flightReturn.fid}'`,
                cid: `'${userDetails.cid}'`,
                qty: `'${ticketQuantity}'`,
                CreditCardNumber: `'${userDetails.creditCardNumber}'`,
                CardMonth: `'${userDetails.expiryDate}'`,
                CardYear: `'${userDetails.expiryDate}'`
            })
            // mode: 'no-cors'
        }).then(res => res.json()).then(data => {
            console.log('flghts', data)
            if (data.message) {
                this.setState({
                    message: data.message
                })
            }
        })

    }

    render() {
        const {
            userDetails,
            source,
            destination,
            departure,
            returnDate,
            departureFlight,
            flightReturn,
            ticketQuantity
        } = this.props
        const { message } = this.state;

        if (message) {

            return <div>{message}</div>
        }
        return <div>
            <h3>Reservation confirmed for {flightReturn ? 'Round trip journey' : 'One-way trip'}.</h3>
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
        </div >;
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(SubmitReservation);
