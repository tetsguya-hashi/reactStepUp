import { Link } from "react-router-dom"

export const Page1 = () => {
  return (
    <div className='container'>
      <h1>
        Page1ページです
      </h1>
      <nav>
        <Link to='/page1/detailA'>DetailA</Link>
        <Link to='/page1/detailB'>DetailB</Link>
      </nav>
    </div>
  )
}