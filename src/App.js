// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Content from './pages/Content';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
        <Switch>
          <Route exact path='/' component={Home} />
          <ProtectedRoute path='/content' component={Content} />
          <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
