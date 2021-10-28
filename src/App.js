
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/order-place">
          <OrderPlace />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
