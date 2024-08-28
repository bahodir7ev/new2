import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductsGrid({ list }) {
    return (
        <div className='products-grid'>
            {
                list.map(product => (
                    <Link to={'/product/' + product.id}>
                        <ProductCard key={product.id} product={product} />
                    </Link>
                ))
            }
        </div>
    )
}

export default ProductsGrid