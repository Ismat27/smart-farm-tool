import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import footerLogo from '../images/footer-logo.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { CiInstagram } from 'react-icons/ci'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'


const Footer = () => {
  return (
    <Wrapper>
        <div className='footer-content'>
            <Link to={'/'}>
                <img className='footer-logo' alt='footer-logo' src={footerLogo} />
            </Link>
            <div className='idk'>
                <article className='company'>
                    <h2>Company</h2>
                    <ul className='footer-nav'>
                        <li>
                            <Link>About us</Link>
                        </li>
                        <li>
                            <Link>Pricing</Link>
                        </li>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </article>
                <article className='connect'>
                    <h2>Stay Connected</h2>
                    <ul className='social-links'>
                        <li>
                            <a href='/'><FaFacebookF/></a>
                        </li>
                        <li>
                            <a href='/'><CiInstagram/></a>
                        </li>
                        <li>
                            <a href='/'><FiTwitter/></a>
                        </li>
                        <li>
                            <a href='/'><FaLinkedinIn/></a>
                        </li>
                        <li>
                            <a href='/'><AiOutlineYoutube/></a>
                        </li>
                    </ul>
                </article>
            </div>
            <div className='base'>
                <p>&copy;{new Date().getFullYear()}</p>
                <p>Privacy Policy &nbsp; &nbsp; Terms of Service</p>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
background-color: var(--deep-green);
padding-block: 40px 20px;
* {
    color: var(--white) !important;
}
.footer-content {
    width: 90%;
    margin: auto;
}
.footer-logo {
    max-width: 200px;
}
.idk {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    h2 {
        margin-bottom: 25px;
    }
}
.footer-nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.social-links {
    display: flex;
    gap: 20px;
}
svg {
    font-size: 18px;
}
@media (min-width: 768px) {
    .footer-logo {
        max-width: 300px;
    }
    .idk {
        gap: 250px;
    }
    .base {
        display: flex;
        justify-content: space-between;
    }
    svg {
        font-size: 20px;
    }
}
@media (min-width: 992px) {
    .idk {
        padding-left: 350px;
        gap: 100px;
    }
}
`
export default Footer