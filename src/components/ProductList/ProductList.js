import React from 'react'
import { useFilterContext } from '../../context/filter_context'
import GridView from '../GridView/GridView'

const ProductList = () => {
    const {filtered_products:products}=useFilterContext();
    
  return (
    <GridView products={products}>Ürünler</GridView>
  )
}

export default ProductList