import React from 'react'
import {Button} from './Button'
import { Link } from 'react-router-dom'

import './footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to reactive our best
          vaacation deals
        </p>
        <p className="footer-subscription-tex">
          You can unsubscribe at any time
        </p>
        <div className="input-area">
          <form>
            <input type="email" name='email' placeholder='Your Email'
          className='footer-input' />
          <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
          
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Term of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Term of Service</Link>
          </div>
          
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Term of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Term of Service</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/' className="social-logo">
              TVRL <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className='website-rights'>TVRL  2020</small>
          <div className="social-icons">
            <Link className="social-icon-link facebook"
            to="/"
            target='_blank'
            aria-label='facebook'>
              <i className="fab fa-facebook"></i>

            </Link>
            <Link className="social-icon-link instagram"
            to="/"
            target='_blank'
            aria-label='instagram'>
              <i className="fab fa-instagram"></i>

            </Link>
            <Link className="social-icon-link youtube"
            to="/"
            target='_blank'
            aria-label='youtube'>
              <i className="fab fa-youtube"></i>

            </Link>
            <Link className="social-icon-link twitter"
            to="/"
            target='_blank'
            aria-label='twitter'>
              <i className="fab fa-twitter"></i>

            </Link>
            <Link className="social-icon-link linkedIn"
            to="/"
            target='_blank'
            aria-label='linkedIn'>
              <i className="fab fa-linkedIn"></i>

            </Link>

          </div>
        </div>

      </section>
    </div>
  )
}

export default Footer