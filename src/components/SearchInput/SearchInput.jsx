import { Input } from 'antd'
import React, { useState, useCallback } from 'react'
import _ from 'lodash'

const SearchInput = ({ onSearch, ...props }) => {
  const [query, setQuery] = useState('')

  const debounceSearch = useCallback(
    _.debounce((value) => {
      onSearch(value.trim() === '' ? 'return' : value)
    }, 1000),
    [onSearch],
  )

  const handleSearch = (e) => {
    const value = e.target.value
    setQuery(value)
    debounceSearch(value)
  }

  return (
    <Input
      className="search-input"
      maxLength={50}
      {...props}
      onChange={handleSearch}
      value={query}
      placeholder="type to search..."
    />
  )
}

export default SearchInput
