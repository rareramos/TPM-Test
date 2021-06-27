// core
import React from 'react'

// library
import Link from 'next/link'
import Image from "next/image";

// components
import { routes } from "../../constants/routes";

// assets
import styles from './Footer.module.scss'
import twitter from '../../public/icons/twitter.svg'
import linkenin from '../../public/icons/linkenin.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
          <div className={styles.footerTop}>
            <ul>
              <li><h6>Product</h6></li>
              <li><Link href={routes.pricing}><a>Pricing</a></Link></li>
            </ul>
            <ul>
              <li><h6>Company</h6></li>
              <li><Link href={routes.blog}><a>Blog</a></Link></li>
            </ul>
            <ul>
              <li><h6>Help</h6></li>
              <li><Link href={routes.privacyPolicy}><a>Privacy Policy</a></Link></li>
              <li><Link href={routes.termsOfUse}><a>Terms of Use</a></Link></li>
            </ul>
            <ul>
              <li><h6>Contact</h6></li>
              <li><Link href={routes.contact}><a>Contact Us</a></Link></li>
            </ul>
          </div>
          <div className={styles.footerBottom}>
            <p>(c) 2021 TPM Inc. All Rights Reserved</p>
            <ul className={styles.social}>
              <li>
                <a href='#' target="_blank" rel="noreferrer">
                  <Image src={linkenin} alt="linkenin" />
                </a>
              </li>
              <li>
                <a href='#' target="_blank" rel="noreferrer">
                  <Image src={twitter} alt="twitter" />
                </a>
              </li>
            </ul>
          </div>
      </div>
    </footer>
  )
};
