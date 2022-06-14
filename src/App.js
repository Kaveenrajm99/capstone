import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Additems from './components/Additems';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <>
      <Navbar />
      <Switch>
        {/* <Route exact path='/' component={Login} />;
        <Route exact path='/register' component={Register} />; */}
        <Route exact path='/' component={Home} />;
        <Route exact path='/products' component={Products} />;
        <Route exact path='/products/:id' component={Product} />;
        <Route exact path='/contact' component={Contact} />;
        <Route exact path='/additems' component={Additems} />;

      </Switch>
      <Footer />


    </>
  );
}

export default App;
