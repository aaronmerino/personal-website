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
              {"I love studying anything web development, math, drawing, and most of all I love to learn!"}
            </p>
            <p>
              {"In this website, I showcase my projects which include my coding projects, drawings, and any cool math stuff I've learned!"}
            </p>

          </div>);
}