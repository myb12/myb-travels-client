
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
