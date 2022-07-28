import { Link, useHistory } from "react-router-dom"

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();
  const onClickDeailA = () => {
    history.push('/page1/detailA')
  }
  return (
    <div className='container'>
      <h1>
        Page1ページです
      </h1>
      <nav>
        <Link to={{ pathname: '/page1/detailA', state: arr }}>DetailA</Link>
        <Link to='/page1/detailB'>DetailB</Link>
        <button onClick={onClickDeailA}>DetailA</button>
      </nav>
    </div>
  )
}