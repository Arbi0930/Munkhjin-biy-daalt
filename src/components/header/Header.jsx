import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/' alt='' />

            </div>

            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'> Эхлэл</a>
              </li>
              <li>
                <a href='/'>Цуврал</a>
              </li>
              <li>
                <a href='/'>Кино</a>
              </li>
              <li>
                <a href='/'>Хуудас</a>
              </li>
              <li>
                <a href='/'>үнэ</a>
              </li>
              <li>
                <a href='/'>Холбогдох</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <i className='fa fa-search'></i>
            <i class='fas fa-bell'></i>
            <i className='fas fa-user'></i>
            <button>Төлбөр төлөх</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
