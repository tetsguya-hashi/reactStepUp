import './style.scss';
import { Router } from './router/Router';

const user = {
  name: 'じゃけぇ',
  image: 'https://source.unsplash.com/NE0XGVKTmcA',
  email: '1232132.com',
  phone: '090-1234-2234',
  company: {
    name: 'テスト株式会社'
  },
  website: 'https://google.com'

}

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
