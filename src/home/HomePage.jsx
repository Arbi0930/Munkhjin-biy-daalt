import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Trending from "../components/trending/Trending"
import Upcomming from "../components/upcoming/Upcomming"
import { latest, recommended, upcome } from "../dummyData"

const HomePage = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={items} title=' Удахгүй гарах кино' />
      <Upcomming items={item} title='Сүүлд гарсан кино' />
      <Trending />
      <Upcomming items={rec} title='Санал болгох кинонууд ' />
    </>
  )
}

export default HomePage
