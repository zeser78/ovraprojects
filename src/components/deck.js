import React, { useEffect, useRef, useState } from "react"

function Deck({ children }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const activeSlideRef = useRef(null)

  useEffect(() => {
    if (activeSlideRef.current) {
      activeSlideRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      })
    }
  }, [activeSlide])

  const moveLeft = Math.max(0, activeSlide - 1)
  const moveRight = Math.min(children.length - 1, activeSlide + 1)

  return (
    <React.Fragment>
      <button onClick={() => setActiveSlide(moveLeft)}>PREV</button>
      <div id="test">
        {children.map((child, i) => {
          const active = i === activeSlide
          return (
            <div
              className={`slide ${active ? "active" : ""}`}
              ref={active ? activeSlideRef : null}
              id={`slide-${i}`}
              key={`slide-${i}`}
            >
              {child}
            </div>
          )
        })}
      </div>

      <button onClick={() => setActiveSlide(moveRight)}>NEXT</button>
    </React.Fragment>
  )
}
export default Deck
