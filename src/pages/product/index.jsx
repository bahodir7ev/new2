import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from '../../api'
import { urls } from '../../constants/urls'

function ProductPage() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  function getProduct() {
    Axios.get(urls.products.getId(id)).then(res => {
      if (res.data) {
        setProduct(res.data)
      }
    }).catch(console.log)
  }

  useEffect(() => {
    getProduct()
  }, [])

  if (product === null) {
    return <h1>Loading...</h1>
  }

  return <div>
    <h1>{product.title}</h1>
  </div>
}

export default ProductPage
