import { FC } from "react"
import { UserProfile } from "../types/userProfile"
type Props = {
  user: UserProfile;
}
export const UserCard: FC<Props> = (props) => {
  const { user } = props;

  return (
    <div className="card">
      <dl>
        <dt>名前</dt>
        <dd>{user.name} </dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  )
}