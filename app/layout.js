import './globals.css'
import Navbar from './components/Navbar'
import styles from './layout.module.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <div className={styles.padding}></div>
        {children}
      </body>
    </html>
  )
}