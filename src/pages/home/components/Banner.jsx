import React from 'react'

function Banner() {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner-row'>
          <div className='banner-left'>
            <h1 className='banner-left-title'>
              Всегда свежие молочные продукты
            </h1>
            <p className='banner-left-subtitle'>
              Только качественные товары, за  которыми мы всегда следим
            </p>
            <button className='banner-left-btn'>Подробнее</button>
          </div>
          <div className='banner-right'>
            <img src="/images/banner-bg.png" alt="banner car image" className='banner-right-image'/>
          </div>

          <button className="banner-prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='banner-prev-icon'>
              <path fillRule="evenodd" clipRule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#303030" />
            </svg>
          </button>
          <button className="banner-next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='banner-next-icon'>
              <path fillRule="evenodd" clipRule="evenodd" d="M8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711L14.5858 12L8.29289 18.2929C7.90237 18.6834 7.90237 19.3166 8.29289 19.7071C8.68342 20.0976 9.31658 20.0976 9.70711 19.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289Z" fill="#303030" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
