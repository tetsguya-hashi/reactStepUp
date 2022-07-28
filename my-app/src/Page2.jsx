import { Link } from "react-router-dom"

export const Page2 = () => {
  return (
    <div className='container'>
      <h1>
        Page2ページです
      </h1>
      <nav>
        <Link to="/page2/900">URL Parameter</Link>
        <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
      </nav>
    </div>
  )
}