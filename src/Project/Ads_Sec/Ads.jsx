
import React, { useEffect, useState, useRef } from 'react'
import './Ads.css'
import Ad1 from '../../assets/Ads_Imgs/Ad1.webp'
import Ad2 from '../../assets/Ads_Imgs/Ad2.webp'
import Ad3 from '../../assets/Ads_Imgs/Ad3.webp'
import Ad4 from '../../assets/Ads_Imgs/Ad4.webp'
import Ad5 from '../../assets/Ads_Imgs/Ad5.webp'
import Ad6 from '../../assets/Ads_Imgs/Ad6.webp'
import Ad7 from '../../assets/Ads_Imgs/Ad7.webp'

 const Ads = () => {
  const images = [Ad1, Ad2, Ad3, Ad4, Ad5, Ad6, Ad7]
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000)
    return () => clearInterval(timer.current)
  }, [images.length])

  const handlePrev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length)
    clearInterval(timer.current)
    timer.current = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000)
  }

  const handleNext = () => {
    setIndex((i) => (i + 1) % images.length)
    clearInterval(timer.current)
    timer.current = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000)
  }

  return (
    <>
      <div className="ads-wrapper">
      <div className="ads-carousel">
        <div className="ads-viewport">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Ad ${i + 1}`}
              className={`ads-img ${i === index ? 'active' : ''}`}
              loading="lazy"
            />
          ))}
        </div>

        <button
          className="carousel-arrow left-arrow"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button
          className="carousel-arrow right-arrow"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
     </div>
    </>
  )
}

export default Ads
