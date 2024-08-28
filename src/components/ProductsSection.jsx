import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

function ProductsSection({ title, list }) {
    return (
        <section className='ProductsSection'>
            <div className="container">
                <div className="ProductsSection-row">
                    <div className="ProductsSection-top">
                        <h1>{title}</h1>
                        <Link to='/product' className='ProductsSection-top-link'>Cмотреть все</Link>
                    </div>
                    <div className="ProductsSection-cards">
                        {
                            list.map(product => (
                                <Link to={'/product/' + product.id}>
                                    <ProductCard key={product.id} product={product} />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection