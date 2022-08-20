import React from 'react'

import Filters from "../../components/Filters/Filters"
import ProductList from "../../components/ProductList/ProductList"
import Sort from "../../components/Sort/Sort"
import PageHero from "../../components/PageHero/PageHero"

import "./ProductsPage.css"

const ProductsPage = () => {
  return (
    <main>
      <PageHero />
      <div className='page'>
        <div className='section-center products'>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductsPage