import './App.css';
import HomePage from './Pages/HomePage'
import CategoryPage from './Pages/CategoryPage'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import IndAd from './Pages/indAd';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route path="/product/:id" component = {IndAd} />
        <Route path="/categories/:id" component = {CategoryPage} />
      </Switch>
    </Router>
  );
}

export default App;
