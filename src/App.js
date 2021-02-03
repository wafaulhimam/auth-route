// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/content' component={Content} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
