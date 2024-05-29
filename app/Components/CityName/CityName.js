"use client"
import React, { useEffect, useRef } from "react"

const fitText = (element) => {
  if (!element) return

  const characters = element.innerHTML.length

  if (characters < 6) {
    if (window.screen.width <= 425) element.style.fontSize = "2rem"
    else element.style.fontSize = "4rem"
  } else if (characters === 6 || characters === 7) {
    if (window.screen.width <= 425) element.style.fontSize = "1.75rem"
    else element.style.fontSize = "3rem"
  } else if (characters === 8 || characters === 9) {
    if (window.screen.width <= 425) element.style.fontSize = "1.25rem"
    else element.style.fontSize = "2.75rem"
  } else {
    if (window.screen.width <= 425) element.style.fontSize = "1rem"
    else element.style.fontSize = "2rem"
  }
}

const CityName = ({ city }) => {
  const cityNameRef = useRef(null)

  useEffect(() => {
    fitText(cityNameRef.current)
  }, [city])

  return <h1 ref={cityNameRef}>{city}</h1>
}

export default CityName
