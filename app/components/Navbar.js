'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link';
import styles from './navbar.module.css'

const MENU_LIST = [
  { text: 'HOME', href: '/' },
  { text: 'ABOUT ME', href: '/about' },
  { text: 'CONTACT', href: '/contact' }
];

export default function Navbar() {
  const pathname = usePathname()
  
  return (
    <nav>
      <ul className={styles.mainNav}>
        {MENU_LIST.map(item => {
          const isActive = pathname === item.href;

          return (
            <li key={item.text} >
            
              
                <Link href={item.href}
                      className={ (isActive ? styles.selected : styles.default) + ' ' + styles.roundBorder}>
                  {item.text}
                </Link>
              
            </li>
        )})}
      </ul>
    </nav>

  );
}

