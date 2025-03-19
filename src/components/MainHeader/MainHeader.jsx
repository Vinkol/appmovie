import { Menu } from 'antd'

function MainHeader({ setSelectedPage }) {
  const handleClickPage = (page) => {
    setSelectedPage(page.key)
  }

  const menuItems = [
    { key: 'search', label: 'Search' },
    { key: 'rated', label: 'Rated' },
  ]

  return (
    <Menu mode="horizontal" className="button-choise" onClick={handleClickPage} items={menuItems} />
  )
}

export default MainHeader
