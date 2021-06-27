// core
import React, { useState } from 'react'

// library
import Link from 'next/link'
import Image from 'next/image'

// components
import { routes } from '../../constants/routes';

// assets
import styles from './Header.module.scss'
import logo from '../../public/icons/logo.svg'

const links = [
  {name: 'Features', url: routes.features},
  {name: 'Pricing', url: routes.pricing},
  {name: 'Blogs', url: routes.blog},
  {name: 'Contact', url: routes.contact},
];


export const Header = () => {
    const [activeMobile, setActiveMobile] = useState(false);

    const showMenu = () => setActiveMobile(!activeMobile);

    return (
      <div
        className={`${styles.header}`}>
        <div className='container'>
          <div className={styles.headerInner}>
            <Link href={routes.home}>
              <a className={styles.navLogo}>
                <Image src={logo} alt="Undone Logo" />
              </a>
            </Link>
            <nav className={`${styles.nav} ${activeMobile ? styles.active : ''}`}>
              {links.map((link, index) => (
                <Link key={index} href={link.url}>
                  <a>{link.name}</a>
                </Link>
              ))}
            </nav>
            <button
              type="button"
              className={activeMobile ? `${styles.burgerMenu}  ${styles.active}` : `${styles.burgerMenu}`}
              onClick={() => showMenu()}>
              <span className={styles.burgerMenuLines} />
            </button>
          </div>
        </div>
      </div>
    )
  }
;
