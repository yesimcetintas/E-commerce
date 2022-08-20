import React, { useEffect } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'
import { single_product_url as url } from '../../utils/constants'
import { formatPrice } from '../../utils/helpers'

import Loading from "../../components/Loading/Loading"
import Error from "../../components/Error/Error"
import AddToCart from "../../components/AddToCart/AddToCart"
import PageHero from "../../components/PageHero/PageHero"
import { Link } from 'react-router-dom'

import"./SingleProductPage.css"

const SingleProductPage = () => {
  const { id } = useParams()
  const history = useNavigate()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    //eslint-disable-next-line
  }, [id])

  useEffect(()=>{
    if(error){
      setTimeout(()=>{
        history.push("/")
      },3000)
    }
  },[error])
  if(loading){
    return <Loading></Loading>
  }

  if(error){
    return <Error></Error>
  }
  
  const{
    price,
    description,
    category,
    image,
  }=product

  return(
    <div>
      <PageHero title={category} product></PageHero>
      <div className='section section-center page section-left'>
        <Link to="/" className='btn'>
          ürünler sayfasına geri dön
        </Link>
        <div className="product-center">
          <img src={image} className='product-img' />
          <section className='content'>
            <h2>{category}</h2>
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <hr/>
            <AddToCart product={product} />
          </section>
        </div>
      </div>
    </div>
  )
  
}


export default SingleProductPage