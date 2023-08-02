'use client'
import { Fragment, useState } from 'react';
import { Post } from './Post';
import styles from './home.module.css';

export function Home ({ sortedPosts }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <SearchBar query={text} onChange={handleChange}/>

      <div className={styles.posts}>
        {sortedPosts.map((post) => {
          let query = text.toLowerCase();
          let title = post.title.toLowerCase();

          if (title.includes(query) || text === '') {
            return <Post key={post.id} title={post.title} date={post.date} images={post.images} content={post.content}></Post>;
          }
        })}
      </div>
    </div>

    );
}

function SearchBar ({ query, onChange }) {
  return (
    <form className={styles.searchBar}>
      <label className={styles.magnifierLabel}>
        <svg className={styles.magnifierIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> 
            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="rgb(153 161 179)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            </path> 
            </g>
        </svg>
      </label>
      <input 
        className={styles.searchBarInput}
        placeholder="Search" 
        maxlength="64" 
        type="search" 
        value={query}
        onChange={onChange}>
      </input>
    </form>
  );
}