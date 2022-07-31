import { useState } from "react";
import { UserProfile } from "../types/userProfile";
import axios from 'axios';
import { User } from "../types/api/user";

//全ユーザーの一覧を酒t区するカスタムフック
export const useAllusers = () => {
  const [userProfiles, setUserPtofiles] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = () => {
    setLoading(true);
    axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data[0].id)
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserPtofiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { getUsers, userProfiles, loading, error }
}