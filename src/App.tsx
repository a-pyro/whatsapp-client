import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import './styles/styles.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/home' exact component={Home} />
    </Router>
  );
}

export default App;
