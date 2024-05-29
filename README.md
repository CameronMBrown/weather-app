This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

If you have a Vercel account, you can view the app with this public URL
https://weather-ocyizt9a7-cameron-browns-projects-1c67ac2b.vercel.app/

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Overview

This is a basic weather app built with Next.js, Scss and the OpenWeather API
https://openweathermap.org/api

The app displays a breif summary of the current weather conditions and the forecasted temperature for the next 3 days.

The app has a responsive design and should adjust nicely to your devices' screen size.

Unlike a single-page React app, that might load all of the required API data and display the correct weather based on the state of the currently selected city, this Next app leverages dynamic routes. So the /new-york route will make an appropriate request to the OpenWeather API for only the relevant weather data for new york.
