import './style.scss';
import axios from 'axios';

function App() {
  const onClickUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((rex) => {
        console.log(rex.data);
      })
      .catch((err) => console.log(err));
  }
  const onClickUser1 = () => {
    axios.get('https://jsonplaceholder.typicode.com/users?id=1')
      .then((rex) => {
        console.log(rex.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
}

export default App;
