import React from "react"
import { homeData } from "../../dummyData"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box'>
            <ul className='flex'>
              <li>Хэрэглэх нөхцөл</li>
              <li>Нууцлал-Бодлого</li>
              <li>Блог</li>
              <li>FAQ</li>
              <li>Үзэх жагсаалт</li>
            </ul>
            <p>© 2022 ОНЫ СТРАМИТ. Бүх эрх хуулиар хамгаалагдсан.  контентууд нь МХТС-ийн өмч юм. Үүнийг хуулбарлах, хуулбарлахыг хатуу хориглоно. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
          <div className='box'>
            <h3>
              Холбогдох
            </h3>
            <i className='fab fa-facebook-f'></i>

            <i className='fab fa-instagram'></i>
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
