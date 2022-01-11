import React from 'react';
import Button from '@material-ui/core/Button';
import '../Departure/Departure.css';
import { connect } from "react-redux";
import { setReturnFlight } from '../redux/actions';


class Return extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFlight: null,
            returnFlights: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/homepage/search/returnflights', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Orig: 1,
                Dest: 2,
                rDate: "'2021-04-28'",
                dFlight: 101
            })
            // mode: 'no-cors'
        }).then(res => res.json()).then(data => {
            // console.log('flghts', data)
            this.setState({
                returnFlights: [
                    ...data
                ]
            })
        })
    }

    handleChange = v => {
        const slectedFlight = this.state.returnFlights.filter(f => f.fid === v);
        this.setState({
            selectedFlight: v
        })
        this.props.setReturnFlight(slectedFlight[0]);
    };


    render() {

        return <React.Fragment>
            <div >
                <h3>Return Flights:</h3>
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
                    this.state.returnFlights.map((d, i) => <div key={d.fid} className={`flights ${this.state.selectedFlight && this.state.selectedFlight === d.fid ? 'selected' : ''}`} onClick={() => this.handleChange(d.fid)}>
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
            <div>
                <span>Click below button to book round trip flights.</span>
                <div>
                    <Button variant="contained" color="primary"
                        className="buttonYes"
                        disabled={!this.state.selectedFlight}
                        onClick={() => this.props.history.push('/ticket-quantity')}
                    >
                        Goto Tickets Page
            </Button>
                </div>
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
    setReturnFlight: (payload) => dispatch(setReturnFlight(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Return);
