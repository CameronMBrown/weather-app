import React from "react"
import Link from "next/link"

import "./SelectLocation.scss"

const SelectLocation = ({ current }) => {
  return (
    <div className="locations">
      <Link
        href="/tokyo"
        className={current === "tokyo" ? "active" : "inactive"}
      >
        Tokyo
      </Link>
      <Link
        href="/new-york"
        className={current === "new-york" ? "active" : "inactive"}
      >
        New York
      </Link>
      <Link
        href="/moscow"
        className={current === "moscow" ? "active" : "inactive"}
      >
        Moscow
      </Link>
    </div>
  )
}

export default SelectLocation
