import Pages from './pages/Pages';
import Category from './components/Category';
import {BrowserRouter as Router} from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <Router>
    <div className="App">
      <Search/>
      <Category/>
      <Pages/>
    </div>
    </Router>
    
  );
}

export default App;
