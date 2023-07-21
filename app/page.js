import { getSortedPostsData } from './util/posts';
import { Home } from './components/Home';

export const metadata = {
  title: 'HOME',
}

// `app/page.js` is the UI for the `/` URL
export default async function Page() {
  const posts = await getSortedPostsData();
  return <Home sortedPosts={posts}/>;
}