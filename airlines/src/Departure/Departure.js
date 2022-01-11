import React from 'react';
import Button from '@material-ui/core/Button';
import './Departure.css';
import { connect } from "react-redux";
import { setDepartureFlight } from '../redux/actions';

class Departure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFlight: null,
            departureFlights: []
        }
    }

    componentDidMount() {
        // console.log('props', this.props)
        fetch('http://localhost:5000/homepage/search', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Orig: this.props.source.cityid,
                Dest: this.props.destination.cityid,
                dDate: `'${this.props.departure}'`
            })
            // mode: 'no-cors'
        }).then(res => res.json()).then(data => {
            // console.log('flghts', data)
            if (data.flightDetails.length > 0) {
                this.setState({
                    departureFlights: [
                        ...data.flightDetails
                    ]
                })

            }
            // this.setState({
            //     departureFlights: [
            //         { fid: 1, fnumber: 111 },
            //         { fid: 2, fnumber: 222 },
            //         { fid: 3, fnumber: 333 },
            //         { fid: 4, fnumber: 444 }
            //     ]
            // })
        })
    }

    handleChange = v => {
        const slectedFlight = this.state.departureFlights.filter(f => f.fid === v);
        this.setState({
            selectedFlight: v
        })
        this.props.setDepartureFlight(slectedFlight[0]);
    };

    render() {

        return <React.Fragment>
            <div >
                <h3>Departure Flights:</h3>
                <div className="flights header">
                    <div>SL No.</div>
                    <div>Flight Number</div>
                    <div>Date</div>
                    <div>Time</div>
                    <div>Source</div>
                    <div>Destination</div>
                    <div>Class</div>
                    <div>Price</div>
                </div>
                {
                    this.state.departureFlights.map((d, i) => <div key={d.fid} className={`flights ${this.state.selectedFlight && this.state.selectedFlight === d.fid ? 'selected' : ''}`} onClick={() => this.handleChange(d.fid)}>
                        <div>{i + 1}</div>
                        <div>{d.fnumber}</div>
                        <div>{d.fdate}</div>
                        <div>{d.ftime}</div>
                        <div>{d.orig}</div>
                        <div>{d.dest}</div>
                        <div>{d.class}</div>
                        <div>{d.price}</div>
                    </div>)
                }
            </div>
            <div>You will receive a 40% discount on tickets if you are purchasing a round-trip flight.</div>
            <span>Click below button to book return flight or not.</span>
            <div>
                <Button variant="contained" color="primary"
                    className="buttonNo"
                    disabled={!this.state.selectedFlight}
                    onClick={() => this.props.history.push('/ticket-quantity')}
                >
                    No
            </Button>
                <Button variant="contained" color="primary"
                    className="buttonYes"
                    disabled={!this.state.selectedFlight}
                    onClick={() => this.props.history.push('/return')}
                >
                    Yes
            </Button>
            </div>
        </React.Fragment>;
    }
}
const mapStateToProps = state => ({
    departureFlight: state.airline.departureFlight,
    source: state.airline.source,
    destination: state.airline.destination,
    departure: state.airline.departure,
    return: state.airline.return
});

const mapDispatchToProps = dispatch => ({
    setDepartureFlight: (payload) => dispatch(setDepartureFlight(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Departure);