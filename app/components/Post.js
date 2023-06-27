'use client'
import Image from 'next/image';
import styles from './post.module.css'


export function Post({ title, date, images, content }) {
  return (
    <div className={styles.post}>
      {/* <ul>
        {images.map((image) => { 
           return (<li key={image}>
                      <Image  src={`/posts/${image}`} 
                              height={144} 
                              width={144} 
                              alt="" />
                    </li>);})}
      </ul> */}
      <div className={styles.imageGallery}>
        <div className={styles.buttonImageController}>
          <div className={styles.button}>{''}</div>
          <div className={styles.button}>{''}</div>
        </div>
        <Image  className={styles.image}
                src={`/posts/${images[0]}`} 
                height={440} 
                width={440} 
                alt="" />
      </div>

      <Description title={title} date={date} content={content}/>      
    </div>
  );

}

function Description( {title, date, content }) {
  return (
    <div className={styles.description}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}