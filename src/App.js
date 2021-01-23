import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import Hero from './components/Hero'

// Button Props
// children, size, textColor, bgColor, bgHover, className

const App = () => {

  return (
    <>
    <Header />
    <Hero />
    <Button bgColor="blue">This is a button</Button>
    <Button bgColor="green">This is a button</Button>
    <Button bgColor="red" bgHover="default">This is a button</Button>
    <Footer />
    </>
  );
}

export default App;
