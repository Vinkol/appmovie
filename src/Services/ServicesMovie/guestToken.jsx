import movieDataBase from '../movieDataBase'

const guestToken = async () => {
  if (localStorage.getItem('guest')) return
  try {
    const guestKey = await movieDataBase.get('/authentication/guest_session/new')
    if (guestKey.data && guestKey.data.guest_session_id) {
      localStorage.setItem('guest', guestKey.data.guest_session_id)
    } else {
      console.error('Не удалось получить гостевой токен')
    }
  } catch (error) {
    console.error('Ошибка при получении гостевого токена:', error)
  }
}

export default guestToken
