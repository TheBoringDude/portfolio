import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="py-4">
    <div className="w-5/6 mx-auto flex items-center justify-between">
      <h1 className="font-bold">Joshue Abance</h1>

      <ul className="flex items-center">
        <li className="mx-8">
          <Link to="/blog">blog</Link>
        </li>
        <li className="ml-8">
          <Link to="/works" className="">
            works
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
