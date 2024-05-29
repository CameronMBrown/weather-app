import React from "react"
import {
  FaSun,
  FaCloud,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaSnowflake,
  FaSmog,
  FaBolt,
  FaQuestion,
} from "react-icons/fa"

const getWeatherIcon = (description) => {
  switch (description.toLowerCase()) {
    case "clear sky":
    case "sunny":
      return <FaSun />
    case "few clouds":
    case "scattered clouds":
    case "broken clouds":
    case "overcast clouds":
      return <FaCloud />
    case "light rain":
    case "moderate rain":
    case "light intensity shower rain":
    case "shower rain":
      return <FaCloudRain />
    case "heavy intensity rain":
    case "very heavy rain":
    case "extreme rain":
    case "freezing rain":
    case "heavy intensity shower rain":
      return <FaCloudShowersHeavy />
    case "ragged shower rain":
    case "thunderstorm with light rain":
    case "thunderstorm with rain":
    case "thunderstorm with heavy rain":
    case "light thunderstorm":
    case "thunderstorm":
    case "heavy thunderstorm":
    case "ragged thunderstorm":
    case "thunderstorm with light drizzle":
    case "thunderstorm with drizzle":
    case "thunderstorm with heavy drizzle":
      return <FaBolt />
    case "light snow":
    case "snow":
    case "heavy snow":
    case "sleet":
    case "light shower sleet":
    case "shower sleet":
    case "light rain and snow":
    case "rain and snow":
    case "light shower snow":
    case "shower snow":
    case "heavy shower snow":
      return <FaSnowflake />
    case "mist":
    case "smoke":
    case "haze":
    case "sand/ dust whirls":
    case "fog":
    case "sand":
    case "dust":
    case "volcanic ash":
    case "squalls":
    case "tornado":
      return <FaSmog />
    default:
      return <FaQuestion />
  }
}

// Component to display weather icon
const WeatherIcon = ({ description }) => {
  return <div className="weather-icon">{getWeatherIcon(description)}</div>
}

export default WeatherIcon
