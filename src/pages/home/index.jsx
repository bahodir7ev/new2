import React, { useEffect, useState } from 'react'
import Banner from './components/Banner'
import Features from './components/Features'
import ProductsSection from '../../components/ProductsSection'
import Axios from '../../api'
import { urls } from '../../constants/urls'

function Home() {
  const [isSaleProducts, setIsSaleProducts] = useState([])
  const [isPopularProducts, setIsPopularProducts] = useState([])
  const [isNewProducts, setIsNewProducts] = useState([])

  function getIsSale() {
    Axios.get(urls.products.isSale).then((res) => {
      if (res.data) {
        setIsSaleProducts(res.data)
      }
    }).catch(console.log)
  }

  function getIsPopular() {
    Axios.get(urls.products.isPopular).then(res => {
      if (res.data) {
        setIsPopularProducts(res.data)
      }
    }).catch(console.log)
  }

  function getIsNew() {
    Axios.get(urls.products.isNew).then(res => {
      if (res.data) {
        setIsNewProducts(res.data)
      }
    }).catch(console.log)
  }

  useEffect(() => {
    getIsSale()
    getIsPopular()
    getIsNew()
  }, [])

  return (
    <div className='page home-page'>
      <Banner />
      <Features />
      <ProductsSection title="Aksiya" list={isSaleProducts} />
      <ProductsSection title="Popular" list={isPopularProducts} />
      <ProductsSection title="Yangi qo'shilganlar" list={isNewProducts} />
    </div>
  )
}

export default Home
