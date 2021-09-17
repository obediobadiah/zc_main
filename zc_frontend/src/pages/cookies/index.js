import React from 'react'
import styles from './styles/Cookie.module.css'
import hamburger from '../../assets/hamburger.png'
import { Link } from 'react-router-dom'

const Cookies = () => {
  return (
<<<<<<< HEAD
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
=======
    <div className={styles.bannerContainer}>
      <div className={styles.bannerBox}>
        <div className={styles.bannerLogo}>
          <img className={`mx-auto`} src={hamburger} alt="hamburger" />
          <div className={styles.bannerTitle}>
            <h1>OUR COOKIE POLICY</h1>
          </div>
          <div className={styles.bannerText}>
            <p>
              We use cookies to ensure that that we give the best experience on
              or website. We also use cookies to ensure we show
              <br /> you advertisiing that si relevant to you{' '}
              <Link to="/cookies-settings">manage cookie settings</Link> at
              anytime.
            </p>
          </div>
        </div>
        <div className={styles.bannerButtons}>
          <button
            style={{
              backgroundColor: '#00b87c',
              color: 'white',

              fontWeight: 'bold',
              padding: '10px 0',
              borderRadius: '20px',
              border: 'none'
            }}
            className={`${styles.allowButton} ${styles.button} `}
          >
            Allow
          </button>
          <button
            style={{
              backgroundColor: 'white',
              color: 'black',

              padding: '10px 0 ',
              fontWeight: 'bold',
              borderRadius: '20px',
              border: 'none'
            }}
            className={`${styles.declineButton} ${styles.button}`}
          >
            Decline
          </button>
        </div>
>>>>>>> 168e9fbbe24ab46e4fd8072f787def33b518033b
      </div>
    </div>
  )
}

export default Cookies
