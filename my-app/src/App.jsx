import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import './style.scss';
import { Router } from './router/Router';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';

function App() {
  return (
    <div className="App container">
      <PrimaryButton>メインのボタン</PrimaryButton>
      <SecondaryButton>二番目のボタン</SecondaryButton>
      <SearchInput />
    </div>
  );
}

export default App;
