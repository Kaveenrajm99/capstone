import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />;
        <Route exact path='/products' component={Products} />;
        <Route exact path='/products/:id' component={Product} />;
        <Route exact path='/contact' component={Contact} />;
      </Switch>
      <Footer />

    </>
  );
}

export default App;
