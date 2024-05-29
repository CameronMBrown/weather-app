import React from "react"
import { notFound } from "next/navigation"

// components
import SelectLocation from "../Components/SelectLocation/SelectLocation"
import WeatherData from "../Components/WeatherData/WeatherData"

// util
import CITIES from "../util/CityCoordinates"

export async function generateStaticParams() {
  // Generate paths for the predefined cities
  return Object.values(CITIES).map((city) => ({
    city: city.slug,
  }))
}

async function fetchCurrentWeather(lat, lng, apiKey) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
  )
  return await res.json()
}

async function fetchForecast(lat, lng, apiKey) {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
  )
  return await res.json()
}

const CityWeatherPage = async ({ params }) => {
  if (!params) params = { city: "tokyo" }

  const cityKey = Object.keys(CITIES).find(
    (key) => CITIES[key].slug === params.city
  )

  if (!cityKey) {
    notFound()
  }

  const city = CITIES[cityKey]
  const currentWeather = await fetchCurrentWeather(
    city.lat,
    city.lng,
    process.env.API_KEY
  )
  let forecast = await fetchForecast(city.lat, city.lng, process.env.API_KEY)

  if (forecast?.list) {
    // Only concerned with the weather at noon each day
    forecast.list = forecast.list.filter((item) =>
      item.dt_txt.includes("12:00:00")
    )
  } else {
    forecast.list = []
  }

  return (
    <main>
      <SelectLocation current={city.slug} />
      <WeatherData current={currentWeather} forecast={forecast} />
    </main>
  )
}

export default CityWeatherPage
