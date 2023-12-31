import styles from './page.module.css'
import Link from 'next/link';

export const metadata = {
  title: 'CONTACT',
}

// `app/page.js` is the UI for the `/` URL
export default function Page() {
  return (<div className={styles.main}>
            <p>
              <b>email</b>: aaronmerino00@gmail.com
            </p>
            <p>
              <b>github</b>: { }
              <Link href={'https://www.github.com/aaronmerino'}>link</Link>
            </p>
          </div>);
}