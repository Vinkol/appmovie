import { Pagination } from 'antd'

const Paginate = (props) => {
  const { total_pages, current, onChange } = props
  const handlePaginate = (num) => {
    onChange(num)
  }
  return (
    <div className="footer paginate">
      <Pagination
        showSizeChanger={false}
        PageSize={20}
        defaultCurrent={current}
        total={total_pages}
        onChange={handlePaginate}
      />
    </div>
  )
}

export default Paginate
