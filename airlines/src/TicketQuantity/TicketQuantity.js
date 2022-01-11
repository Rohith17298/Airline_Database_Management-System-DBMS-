import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './TicketQuantity.css';
import { setTicketQuantity } from '../redux/actions';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    }
}));

function TicketQuantity(props) {
    const [value, setValue] = React.useState(1);
    const classes = useStyles();

    const yesButtton = () => {
        props.setTicketQuantity(value)
        props.history.push('/login')
    }

    return <React.Fragment>
        <div>
            <h3>How many tickets you want to buy?</h3>
            <div className="incr-decr">
                <Button variant="contained" color="primary"
                    className={classes.button}
                    disabled={value <= 1}
                    onClick={() => setValue(value - 1)}
                >
                    -
            </Button>
                <h4>{value}</h4>
                <Button variant="contained" color="primary"
                    className={classes.button}
                    disabled={value >= 10}
                    onClick={() => setValue(value + 1)}
                >
                    +
            </Button>
            </div>
            <div>
                <Button variant="contained" color="primary"
                    className={classes.button}
                    onClick={() => yesButtton()}
                >
                    Book tickets
            </Button>
            </div>
        </div>
    </React.Fragment>;
}

const mapStateToProps = state => ({
    ticketQuantity: state.airline.ticketQuantity
});

const mapDispatchToProps = dispatch => ({
    setTicketQuantity: (payload) => dispatch(setTicketQuantity(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketQuantity);
