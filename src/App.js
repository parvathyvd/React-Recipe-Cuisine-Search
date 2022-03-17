import Pages from './pages/Pages';
import Category from './components/Category';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Category/>
      <Pages/>
    </div>
    </Router>
    
  );
}

export default App;
