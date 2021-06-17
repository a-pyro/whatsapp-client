import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import LoginRegister from './pages/LoginRegister';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
      <Route
        path='/login'
        exact
        render={() => <LoginRegister mode='login' />}
      />
      <Route
        path='/register'
        exact
        render={() => <LoginRegister mode='register' />}
      />

      <Route path='/home' exact component={Home} />
    </Router>
  );
}

export default App;
