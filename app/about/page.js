import styles from './page.module.css'

export const metadata = {
  title: 'ABOUT',
}

// `app/page.js` is the UI for the `/` URL
export default function Page() {
  return (<div className={styles.main}>
            <p>
              {"Hello, you can call me Aaron."}
            </p>
            <p>
              {"I love anything web development, math, drawing, and learning!"}
            </p>
          </div>);
}