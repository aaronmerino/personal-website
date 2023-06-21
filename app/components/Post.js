'use client'
import Image from 'next/image';


export function Post({ title, date, images, content }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{date}</h2>
      <ul>
        {images.map((image) => { 
           return (<li key={image}>
                      <Image  src={`/posts/${image}`} 
                              height={144} 
                              width={144} 
                              alt="" />
                    </li>);})}
      </ul>

      <div>
        {content}
      </div>
    </>
  );

}