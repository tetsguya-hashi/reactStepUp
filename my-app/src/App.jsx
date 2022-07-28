import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import './style.scss';
import { Router } from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/page1'>Page1</Link>
          <Link to='/page2'>Page2</Link>
        </nav>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
