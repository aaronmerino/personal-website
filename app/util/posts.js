import fsPromises from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public', 'posts');

/**
 * This function will parse the public/post's directory and generate a sorted list of objects 
 * that contains various information of each post. Each post in the directory contains
 * an image folder and a Markdown file that contains a description of each image. The list is sorted 
 * based on date indicated in the Markdown file.
 * 
 * @return {[objects]} [list of objects representing each post in the directory]
 */
export async function getSortedPostsData() {
  try {
    const folders = await fsPromises.readdir(postsDirectory);

    const allPostsData = await Promise.all(folders.map(async (folder) => {
      const id = folder;
      const fullPath = path.join(postsDirectory, id, 'text.md');
      const fileContents = await fsPromises.readFile(fullPath, { encoding: 'utf8' });
      const matterResult = matter(fileContents);

      const imagesPath = path.join(postsDirectory, id, 'images');
      let images = await fsPromises.readdir(imagesPath);
      images = images.map((image) => {
        return `${folder}/images/${image}`;
      });
      
      // images = await Promise.all(images.map(async (image) => {
      //   return `${folder}/images/${image}`;
      // }));

      return {
        id,
        ...matterResult.data,
        images: images,
        content: matterResult.content
      };
    }));

    // console.log(allPostsData);

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