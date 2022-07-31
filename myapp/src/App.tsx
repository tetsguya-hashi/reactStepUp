import './App.css';
import { UserCard } from './cmoponents/UserCard';
import { useAllusers } from './hooks/useAllUsers';

function App() {
  const { getUsers, userProfiles, loading, error } = useAllusers()
  const onClickFetchUser = () => getUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>データ取得ボタン</button>
      <br />
      {error ? (<p style={{ color: 'red' }} >データの取得に失敗しました</p>) :
        loading ? (<p>Loading...</p>) : (
          <>
            {userProfiles.map((user) => (
              < UserCard key={user.id} user={user} />
            ))}
          </>
        )}
    </div>
  );
}

export default App;
