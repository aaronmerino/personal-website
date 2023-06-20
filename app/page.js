import styles from './page.module.css'
import { getSortedPostsData } from './util/posts';

export const metadata = {
  title: 'HOME',
}

// `app/page.js` is the UI for the `/` URL
export default function Page() {
  getSortedPostsData();
  return (<>
            <h1>Hello, Home page!</h1>
            <h2>test</h2>
          </>);
}