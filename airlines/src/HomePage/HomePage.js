import './HomePage.css';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { setSource, setDestination, setDeparture, setReturn } from '../redux/actions';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/homepage').then(res => res.json()).then(data => {
      this.setState({
        cities: [...data.res]
      })
    })
  }
  submitHandler = () => {
    this.props.history.push('/departure');
  }

  selectCity = (val, type) => {
    const { setSource, setDestination } = this.props
    const action = type === 'source' ? setSource : setDestination;
    const cityObj = this.state.cities.filter(p => p.title === val);
    action(cityObj[0])
  }
  render() {
    const { source, destination, departure } = this.props;

    return <div className="home-page">
      <div className="lefthomepage"></div>
      <div className="righthomepage">
        <div className="search-flights">
          <FormControl
          >
            <InputLabel id="source">Source</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={source.title || ''}
              onChange={e => this.selectCity(e.target.value, 'source')}
            >
              {
                this.state.cities.map(c => <MenuItem key={c.cityid} id={c.cityid} value={c.title}>{c.title}</MenuItem>)
              }
            </Select>
          </FormControl>
          <FormControl
          >
            <InputLabel id="destination">Destination</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={destination.title || ''}
              onChange={e => this.selectCity(e.target.value, 'dest')}
            >
              {
                this.state.cities.map(c => <MenuItem key={c.cityid} id={c.cityid} value={c.title}>{c.title}</MenuItem>)
              }
            </Select>
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                format="yyyy/MM/dd"
                margin="normal"
                id="departure-date"
                label="Departure Date"
                value={departure}
                onChange={val => this.props.setDeparture(val)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardDatePicker
                format="yyyy/MM/dd"
                margin="normal"
                id="return-date"
                label="Return Date"
                value={this.props.return}
                onChange={val => this.props.setReturn(val)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Button variant="contained" color="primary"
            disabled={!(source && destination && departure && this.props.return)}
            onClick={() => this.submitHandler()}
          >
            Search
      </Button>
        </div>
      </div>
    </div>;
  }
}

const mapStateToProps = state => ({
  source: state.airline.source,
  destination: state.airline.destination,
  departure: state.airline.departure,
  return: state.airline.return
});

const mapDispatchToProps = dispatch => ({
  setSource: (payload) => dispatch(setSource(payload)),
  setDestination: (payload) => dispatch(setDestination(payload)),
  setDeparture: (payload) => dispatch(setDeparture(payload)),
  setReturn: (payload) => dispatch(setReturn(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);