import { Link } from "react-router-dom"

export const Page404 = () => {
  return (
    <div className='container'>
      <h1>
        ページが見つかりません。
      </h1>
      <nav>
        <Link to='/'>ホームへ戻る</Link>
      </nav>
    </div>
  )
}