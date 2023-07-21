'use client'

import { Fragment, useState } from 'react';
import { Post } from './Post';
import styles from './home.module.css';

export function Home ({ sortedPosts }) {
  
  return (
    <div className={styles.main}>
      {sortedPosts.map((post) => {
        return <Post key={post.id} title={post.title} date={post.date} images={post.images} content={post.content}></Post>
      })}
    </div>
    );
}

function SearchBar({ query }) {
  //TODO: Show only Posts with titles containing the string query
}