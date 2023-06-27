import styles from './page.module.css'
import { getSortedPostsData } from './util/posts';
import { Post } from './components/Post';

export const metadata = {
  title: 'HOME',
}

// `app/page.js` is the UI for the `/` URL
export default async function Page() {
  const posts = await getSortedPostsData();
  return (<div className={styles.main}>
            <h2>UNDER CONSTRUCTION! PLEASE WAIT WHILE I GATHER MY BRAIN BITS!</h2>
            
            {posts.map((post) => {
              return <Post key={post.title} title={post.title} date={post.date} images={post.images} content={post.content}></Post>
            })}
          </div>);
}