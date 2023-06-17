'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'

const MENU_LIST = [
  { text: 'HOME', href: '/' },
  { text: 'ABOUT ME', href: '/about' },
  { text: 'CONTACT', href: '/contact' }
];

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState('HOME');

  return (
    <nav className={styles.nav}>
      <ol>
        {MENU_LIST.map(item => (
          <li key={item.text} >
            
              <Link onClick={() => setCurrentPage(item.text)} 
                    href={item.href}
                    className={item.text === currentPage ? styles.selected : styles.default}>
                {item.text}
              </Link>
            
          </li>
        ))}
      </ol>
    </nav>

  );
}

