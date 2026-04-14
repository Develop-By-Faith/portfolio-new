import { useRef, useState, useEffect, useCallback, Children } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Carousel.css'

function Carousel({ children }) {
  const trackRef = useRef(null)
  const rafRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const itemCount = Children.count(children)

  const updateTransforms = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const items = [...track.children]
    const trackRect = track.getBoundingClientRect()
    const centerX = trackRect.left + trackRect.width / 2

    let closestIdx = 0
    let closestDist = Infinity

    items.forEach((item, i) => {
      const rect = item.getBoundingClientRect()
      const itemCenterX = rect.left + rect.width / 2
      const dist = Math.abs(centerX - itemCenterX)

      if (dist < closestDist) {
        closestDist = dist
        closestIdx = i
      }

      const offset = (itemCenterX - centerX) / (rect.width * 1.15)
      const absOffset = Math.min(Math.abs(offset), 3)

      const scale = Math.max(1 - absOffset * 0.15, 0.65)
      const rotate = Math.max(Math.min(offset * -25, 45), -45)
      const opacity = Math.max(1 - absOffset * 0.4, 0.3)
      const zIndex = 10 - Math.round(absOffset)

      item.style.transform = `perspective(800px) rotateY(${rotate}deg) scale(${scale})`
      item.style.opacity = opacity
      item.style.zIndex = zIndex
    })

    setActiveIndex(closestIdx)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track || !track.children.length) return

    const setPadding = () => {
      const item = track.children[0]
      if (item) {
        track.style.paddingInline = `calc(50% - ${item.offsetWidth / 2}px)`
      }
    }

    setPadding()
    updateTransforms()

    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateTransforms)
    }

    const handleResize = () => {
      setPadding()
      updateTransforms()
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      track.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [updateTransforms])

  const scrollTo = (index) => {
    const track = trackRef.current
    if (!track) return
    const items = [...track.children]
    if (!items[index]) return
    items[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <div className="carousel">
      <button
        className={`carousel-arrow carousel-arrow-left${activeIndex > 0 ? ' visible' : ''}`}
        onClick={() => scrollTo(activeIndex - 1)}
        aria-label="Previous"
        tabIndex={activeIndex > 0 ? 0 : -1}
      >
        <FiChevronLeft size={20} />
      </button>
      <div className="carousel-track" ref={trackRef}>
        {children}
      </div>
      <button
        className={`carousel-arrow carousel-arrow-right${activeIndex < itemCount - 1 ? ' visible' : ''}`}
        onClick={() => scrollTo(activeIndex + 1)}
        aria-label="Next"
        tabIndex={activeIndex < itemCount - 1 ? 0 : -1}
      >
        <FiChevronRight size={20} />
      </button>
      {itemCount > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: itemCount }, (_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
