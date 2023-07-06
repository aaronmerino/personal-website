'use client'
import Image from 'next/image';
import styles from './post.module.css'
import UpArrowIcon from '../icons/UpArrow'
import DownArrowIcon from '../icons/DownArrow'
import { useState } from 'react';


export function Post({ title, date, images, content }) {
  const [index, setIndex] = useState(0);

  let hasPrev = index > 0;
  let hasNext = index < images.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  
  return (
    <div className={styles.post}>
      <ImageGallery images={images} index={index} handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} hasNext={hasNext} hasPrev={hasPrev}/>

      <Description title={title} date={date} content={content}/>      
    </div>
  );

}

function ImageGallery({ images, index, handleNextClick, handlePrevClick, hasNext, hasPrev }) {
  return (
    <div className={styles.imageGallery}>
      <div className={styles.buttonImageController}>
        <button className={`${styles.button} 
                        ${(hasNext ? styles.enabled : styles.disabled)} 
                        ${styles.roundedUp} 
                        ${styles.borderUp}`} 
            onClick={handleNextClick} disabled={!hasNext}>
              <UpArrowIcon disabled={!hasNext}/>
        </button>
        <button className={`${styles.button} 
                        ${(hasPrev ? styles.enabled : styles.disabled)} 
                        ${styles.roundedDown} `} 
            onClick={handlePrevClick} disabled={!hasPrev}>
              <DownArrowIcon disabled={!hasPrev}/>
        </button>
      </div>
      <Image  className={styles.image}
              priority={true}
              src={`/posts/${images[index]}`} 
              height={440} 
              width={440} 
              alt="" />
   </div>
  );
}

function Description({ title, date, content }) {
  return (
    <div className={styles.description}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={`${styles.content} 
                    ${styles.styledScrollbars}`}>
                    {content}
      </div>
    </div>
  );
}