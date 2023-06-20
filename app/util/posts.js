import fsPromises from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'app', 'posts');

export async function getSortedPostsData() {
  try {
    const folders = await fsPromises.readdir(postsDirectory);

    const allPostsData = await Promise.all(folders.map(async (folder) => {
      const id = folder;
      const fullPath = path.join(postsDirectory, id, 'text.md');
      const fileContents = await fsPromises.readFile(fullPath, { encoding: 'utf8' });
      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
        content: matterResult.content
      };
    }));

    console.log(allPostsData);

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (err) {
    console.error(err);
  }
}