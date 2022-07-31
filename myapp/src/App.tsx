import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './text';
import { UserProfile } from './UserProfile';
import { User } from './types/user';

const user: User = {
  name: 'じゃけぇ',
  // hobbies: ['琴', 'お花', 'お茶']
}
function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>データ取得</button>
      <Text color='red' fontSize='20px'>aaaa</Text>
    </div>
  );
}

export default App;
