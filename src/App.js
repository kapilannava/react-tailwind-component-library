import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import Hero from './components/Hero'
import Section from './components/Section'
import ReverseSection from './components/ReverseSection'

// Button Props
// children, size, textColor, bgColor, bgHover, className

const App = () => {

  return (
    <>
    <Header /> 
    <Hero />
    <div className="md:mt-32" />
    <Section />
    <div className="mt-16 md:mt-2" />
    <ReverseSection />
    <div className="md:mt-32" />
    <Button bgColor="blue">This is a button</Button>
    <Button bgColor="green">This is a button</Button>
    <Button bgColor="red" bgHover="default">This is a button</Button>
    <Footer />
    </>
  );
}

export default App;
