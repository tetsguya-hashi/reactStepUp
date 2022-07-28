import { useParams, useLocation } from 'react-router-dom';

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div className='container'>
      <h1>
        UrlParameterページです
        <p>パラメーターは{id}</p>
        <p>くえりパラメーターは{query.get('name')}</p>
      </h1>
    </div>
  )
}