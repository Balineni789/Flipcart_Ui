
import React, { useEffect, useState, useRef } from 'react'

const IMAGE_COUNT = 7

const styles = `
  .ads-wrapper {
    width: 100%;
    margin: 0 auto;
    padding: 0 14px;
    margin-top: -6px;
    max-width: 1350px;
    box-sizing: border-box;
  }

  .ads-carousel {
    width: 100%;
    position: relative;
  }

  .ads-viewport {
    width: 100%;
    height: 220px;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
  }

  .ads-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 700ms ease-in-out;
  }

  .ads-img.active {
    opacity: 1;
  }

  .carousel-arrow {
    position: absolute;
    top: 50%;
    padding: 0;
    width: 43px;
    z-index: 10;
    border: none;
    height: 90px;
    display: flex;
    color: #999;
    cursor: pointer;
    margin-left: -10px;
    margin-right: -10px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: white;
    transform: translateY(-50%);
    transition: color 0.3s ease;
  }

  .carousel-arrow:hover {
    color: #333;
  }

  .left-arrow {
    left: 8px;
  }

  .right-arrow {
    right: 8px;
  }
`

 const Ads = () => {
  const images = Array.from({ length: IMAGE_COUNT }, (_, i) => `/Ads_Imgs/Ad${i + 1}.webp`)
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
      <style>{styles}</style>
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