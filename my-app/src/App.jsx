import './style.scss';
import { Router } from './router/Router';
import { UserProvider } from './providers/UserProvider';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router />
      </UserProvider>
    </div>
  );
}

export default App;
