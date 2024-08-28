import React from 'react'
import { features } from '../../../constants/router'

function Features() {
    return (
        <section className="features">
            <div className="container">
                <div className="features-row">
                    {
                        features.map(info => (
                            <div className='features-card' key={info.id}>
                                <div className="features-card-image">
                                    <img src={info.image} alt="features-card-image" />
                                </div>
                                <div className='features-card-content'>
                                    <h3 className="features-card-content-title">{info.title}</h3>
                                    <p className="features-card-content-subtitle">{info.subtitle}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Features