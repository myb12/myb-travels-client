
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import OrderPlace from './components/OrderPlace/OrderPlace';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <PrivateRoute path="/order-place/:serviceId">
            <OrderPlace />
          </PrivateRoute>

          <PrivateRoute path="/my-orders">
            <MyOrders />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
