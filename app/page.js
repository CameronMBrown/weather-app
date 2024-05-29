// import Image from "next/image"
// // import styles from "./page.module.css"
// import Link from "next/link"
// import SelectLocation from "./Components/SelectLocation/SelectLocation"
// import WeatherData from "./Components/WeatherData/WeatherData"

// const TOKYO = { lat: 35.689487, lng: 139.691711 }
// const NEWYORK = { lat: 40.712776, lng: -74.005974 }
// const MOSCOW = { lat: 55.755825, lng: 37.617298 }

import CityWeatherPage from "./[city]/page"

export default async function Home() {
  // const res = await fetch(
  //   `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.API_KEY}&units=metric`
  // )
  // const data = await res.json()

  return (
    <main>
      {/* <SelectLocation current="tokyo" />
      <WeatherData city={"tokyo"} /> */}
      <CityWeatherPage />
    </main>
  )
}
