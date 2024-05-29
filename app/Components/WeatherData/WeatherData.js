import React from "react"
import dynamic from "next/dynamic"

import Card from "../Card/Card"
import WeatherIcon from "../WeatherIcon/WeatherIcon"
// Dynamically import CityName
const CityName = dynamic(() => import("../CityName/CityName"), { ssr: false })

import "./WeatherData.scss"

function getDayOfWeek(timestamp) {
  const date = new Date(timestamp * 1000)
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  return daysOfWeek[date.getUTCDay()]
}

const WeatherData = ({ current, forecast }) => {
  return (
    <div className="weather-grid">
      <Card className="city-name black">
        <CityName city={current.name} />
      </Card>
      <Card className="current-temperature orange">
        <p className="temperature">{current.main.temp.toFixed(0)}°</p>
        <p>Current</p>
      </Card>
      <Card className="conditions blue">
        <WeatherIcon description={current.weather[0].description} />
        <p>{current.weather[0].description}</p>
      </Card>
      <Card className="three-day-forecast">
        <div>
          <p>Tomorrow</p>
          <p className="temperature">
            {forecast.list[0].main.temp.toFixed(0)}°
          </p>
        </div>
        <div>
          <p>{getDayOfWeek(forecast.list[1].dt)}</p>
          <p className="temperature">
            {forecast.list[1].main.temp.toFixed(0)}°
          </p>
        </div>
        <div>
          <p>{getDayOfWeek(forecast.list[2].dt)}</p>
          <p className="temperature">
            {forecast.list[2].main.temp.toFixed(0)}°
          </p>
        </div>
      </Card>
    </div>
  )
}

export default WeatherData
