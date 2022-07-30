import './style.scss';
import { Router } from './router/Router';
import { UserProvider } from './providers/UserProvider';
import { RecoilRoot } from 'recoil';


function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <UserProvider>
          <Router />
        </UserProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
