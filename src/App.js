import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './Home'
import NavbarPage from './NavbarPage'

// Button Props
// children, size, textColor, bgColor, bgHover, className

const App = () => {

  return (
    <>
    <Router>
    <Header /> 
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/NavbarPage" exact component={NavbarPage} />
    </Switch> 
    </Router>   

    </>
  );
}

export default App;
