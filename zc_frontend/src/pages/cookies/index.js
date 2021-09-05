import React from 'react'
import styles from './styles/Cookies.modules.css'
import hamburger from '../../assets/hamburger.png'

const Cookies = () => {
  return (
    <div className="Bannercontainer">
    <div className= "BannerBox">
      <div className="BannerLogo">
        <img src={hamburger} alt="hamburger" />
      </div>
      <div className="BannerTitle">
        <h1>OUR COOKIE POLICY</h1> 
        
      </div>
      <div className="BannerText">
        <p>We use cookies to ensure that that we give the best experience on or website. We also use cookies to ensure we show<br/> you advertisiing that si relevant to you <a href="#">manage cookie settings</a> at anytime.</p>
      </div>
      <div className="BannerButtons">
        <button
        className= "AllowButtons"
        >Allow all cookies</button>
        <button
        className="DeclineButtons"
        >Decline</button>
      </div>
    </div>
</div>
  )
}

export default Cookies
