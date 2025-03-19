import { useEffect, useState } from 'react'
import { format } from 'date-fns'

import Rating from '../Rating/Rating'
import Loading from '../Loading/Loading'
import RatedList from '../RatedList/RatedList'
import Genres from '../Genres/Genres'

const Card = ({
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
  overview,
  id,
  genre_ids,
}) => {
  const showImage = () => {
    if (poster_path === null)
      return 'https://chef-konditer.com.ua/files/products/wednesday-1.500x500.jpg'
    return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const formatData = (data) => {
    if (!data) return null
    return format(new Date(data), 'MMMM d, yyyy')
  }

  const hiddenText =
    overview.length > 19 ? overview.slice(0, overview.indexOf(' ', 100)) + '...' : overview
  const noDescription = overview.length === 0 ? 'No description' : hiddenText

  const bar = {
    none: 'solid 2px #E90000',
    low: 'solid 2px #E97E00',
    medium: 'solid 2px #E9D100',
    high: 'solid 2px #66E900',
  }

  const getColor = (vote_average) => {
    if (vote_average > 7) return 'high'
    if ((vote_average > 5) & (vote_average < 7)) return 'medium'
    if ((vote_average > 3) & (vote_average < 5)) return 'low'
    if ((vote_average > 0) & (vote_average < 3)) return 'none'
  }

  return (
    <li className="movies__card">
      {loading ? (
        <Loading />
      ) : (
        <img src={showImage(poster_path)} alt={title} className="movies__img" />
      )}
      <div className="movies__description">
        <h5 className="movies__name">{original_title || title}</h5>
        <div className="movies__rate" style={{ border: bar[getColor(vote_average)] }}>
          <Rating precent={vote_average} />
        </div>
        <p className="movies__date">{formatData(release_date)}</p>
        <Genres genre_ids={genre_ids} />
        <p className="movies__intro">{noDescription}</p>
        <RatedList id={id} />
      </div>
    </li>
  )
}

export default Card
