import React from 'react'
import { useFilterContext } from '../../context/filter_context'
import { BsFillGridFill } from 'react-icons/bs'

import "./Sort.css"

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    sort,
    updateSort,
  } = useFilterContext()
  return (
    <div className='sort-section'>
      <div className='btn-container'>
        <button
          type='button'
          className={`${grid_view ? 'active' : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        
      </div>
      <p>{products.length} ürün </p>
      <hr />
      <form>
        <label htmlFor='sort'>sırala </label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>fiyat (önce en küçük)</option>
          <option value='price-highest'>fiyat (önce en yüksek)</option>
          <option value='title-a'>ürün adı (a-z)</option>
          <option value='title-z'>ürün adı (z-a)</option>
        </select>
      </form>
    </div>
  )
}

export default Sort