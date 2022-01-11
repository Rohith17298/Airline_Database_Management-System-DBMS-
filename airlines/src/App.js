import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import Homepage from './HomePage/HomePage';
import GreatDeals from './GreatDeals/GreatDeals';
import Help from './Help/Help';
import Contact from './Contact/Contact';
import MenuBar from './UI/MenuBar';
import Departure from './Departure/Departure';
import Return from './Return/Return';
import TicketQuantity from './TicketQuantity/TicketQuantity';
import Login from './Login/Login';
import CreateNewAccount from './CreateNewAccount/CreateNewAccount';
import Billing from './Billing/Billing';
import ConfirmReservation from './ConfirmReservation/ConfirmReservation';
import SubmitReservation from './SubmitReservation/SubmitReservation';

function App() {

  return (
    <div className="App">
      <Router history={history}>
        <MenuBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/great-deals" component={GreatDeals} />
          <Route path="/help" component={Help} />
          <Route path="/contact" component={Contact} />
          <Route path="/departure" component={Departure} />
          <Route path="/return" component={Return} />
          <Route path="/ticket-quantity" component={TicketQuantity} />
          <Route path="/login" component={Login} />
          <Route path="/create-new-account" component={CreateNewAccount} />
          <Route path="/billing" component={Billing} />
          <Route path="/confirm" component={ConfirmReservation} />
          <Route path="/submit" component={SubmitReservation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
