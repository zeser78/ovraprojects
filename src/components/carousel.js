import React, { useEffect, useRef, useState } from "react"

const Carousel = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const activeSlideRef = useRef(null)
  //   const moveLeft = Math.max(0, activeSlide - 1)
  //   const moveRight = Math.min(children.length - 1, activeSlide + 1)

  useEffect(() => {
    if (activeSlideRef.current) {
      activeSlideRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      })
    }
    let slideTime = null
    if (activeSlide < children.length) {
      slideTime = setInterval(() => {
        setActiveSlide(prevState => prevState + 1)
      }, 4000)
    } else if (activeSlide == children.length) {
      setActiveSlide(0)
    }

    console.log(children.length, activeSlide)
    return () => clearInterval(slideTime)
  }, [activeSlide])

  // const moveLeft = Math.max(0, activeSlide - 1)
  // const moveRight = Math.min(children.length - 1, activeSlide + 1)

  return (
    <React.Fragment>
      <div className="carousel">
        {/* <button onClick={() => setActiveSlide(moveLeft)}>PREV</button> */}
        <div id="carousel-container">
          {children.map((child, i) => {
            const active = i === activeSlide
            return (
              <div
                key={i}
                className={`carousel__track ${active ? "active" : "hidden"}`}
                ref={active ? activeSlideRef : null}
              >
                {child}
              </div>
              // <div
              //   className={`slide ${active ? "active" : ""}`}
              //   ref={active ? activeSlideRef : null}
              //   id={`slide-${i}`}
              //   key={`slide-${i}`}
              // >
              //   {child}
              // </div>
            )
          })}
        </div>
        {/* <button onClick={() => setActiveSlide(moveRight)}>NEXT</button> */}
      </div>
    </React.Fragment>
  )
}

export default Carousel
