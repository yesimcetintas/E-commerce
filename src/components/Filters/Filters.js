import React from 'react'
import { useFilterContext } from '../../context/filter_context'
import { getUniqueValues, formatPrice } from '../../utils/helpers'

import "./Filters.css"

const Filters = () => {
  const {
    filters: {
      text,
      category,
      min_price,
      price,
      max_price,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')

  return (
    <div>
      <div className='filter-content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='ara'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
          </div>
          <div className='form-control'>
            <h5>kategori</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${
                      category === c.toLowerCase() ? 'active' : null
                    } section-button`}
                  >
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          <div className='form-control'>
            <h5>fiyat</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              min={min_price}
              max={max_price}
              onChange={updateFilters}
              value={price}
            />
          </div>
          
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>
          {' '}
          filtreleri temizle
        </button>
      </div>
    </div>
  )
}

export default Filters