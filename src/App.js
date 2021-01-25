import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './Home'
import NavbarPage from './NavbarPage'
import SectionPage from './SectionPage'
import FormPage from './FormPage'
import ButtonPage from './ButtonPage'

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
      <Route path="/SectionPage" exact component={SectionPage} />
      <Route path="/FormPage" exact component={FormPage} />
      <Route path="/ButtonPage" exact component={ButtonPage} />
    </Switch> 
    </Router>   

    </>
  );
}

export default App;
