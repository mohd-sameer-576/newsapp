import Wrapper from '../components/Wrapper'
import {useEffect} from 'react'
import Loader from '../components/Loader'
import {useNewsContext} from '../context/NewsContext'
const News = ({className}) => {
  const {news, setNews, fetchData, loading} = useNewsContext()
  useEffect(() => {
    (async()=>{
      const data = await fetchData()
      setNews(data.articles)
    })()

  }, [])
  if(loading) return <Loader/>
  
  return (
    <Wrapper>
      <div className={`grid grid-cols-4 gap-4 ${className}`}>
        {news.map((newsdetails,id)=>{
          return(
            <NewsCard key={id} details = {newsdetails}/>

          )

        })}

      </div>

    </Wrapper>
  )
}

const NewsCard = ({details}) =>{
  return(
    <div className="card bg-base-200  shadow-sm">
  <figure>
    <img
    className='aspect-video object-cover w-full'
      src={details.urlToImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title line-clamp-2">{details.title}</h2>
    <p className='line-clamp-2'>{details.description}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>window.open(details.url)} className="mt-3 btn btn-primary">Read more</button>
    </div>
  </div>
</div>
  )
}

export default News