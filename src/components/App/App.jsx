import { useEffect, useState } from 'react'

import '../../style'

import MovieList from '../MoviesList/MovieList'
import MainHeader from '../MainHeader/MainHeader'
import RatedPage from '../Page/RatedPage/RatedPage'
import movieDataBase from '../../Services/movieDataBase'
import Context from '../../Context/Context'

const App = () => {
  const [selectedPage, setSelectedPage] = useState('search')
  const [genresState, setGenresState] = useState([])

  const getGenres = async () => {
    try {
      const { data } = await movieDataBase.get('/genre/movie/list')
      setGenresState(data.genres)
    } catch (error) {
      console.error('Ошибка при получении жанров:', error)
    }
  }

  useEffect(() => {
    getGenres()
  }, [])

  return (
    <>
      <Context.Provider value={genresState}>
        <section>
          <MainHeader setSelectedPage={setSelectedPage} />
          {selectedPage === 'search' && <MovieList />}
          {selectedPage === 'rated' && <RatedPage />}
        </section>
      </Context.Provider>
    </>
  )
}
export default App
