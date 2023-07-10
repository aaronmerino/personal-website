'use client'
import Image from 'next/image';
import styles from './post.module.css'
import UpArrowIcon from '../icons/UpArrow'
import DownArrowIcon from '../icons/DownArrow'
import { useState } from 'react';

function parseContent(content, handleSetImage) {
  // STATES: 
  //   FINDING_START (looking for '<')
  //   FINDING_NAME (looking for '<name ...')
  //   FINDING_IMAGE_NAME (looking for '<... fname=...')
  //   FOUND_END (found '>')

  // in the FINDING_START CASE, there are two types of characters we are looking for:
  //    type1: '<'
  //    type2: not '<'
  const COMPONENTS_NAME = {FigureButton: true}

  let res = [];
  let text = '';
  let currState = 'FINDING_START';

  let componentName = '';
  let fname = '';

  console.log(JSON.stringify(content));

  for (let i = 0; i < content.length; i++) {
    let char = content[i];
    switch (currState) {
      case 'FINDING_START':
        if (char === '<') {
          if (text !== '') res.push(<>{text}</>);
          currState = 'FINDING_NAME';
        } else {
          if (content.substr(i, 2) === '\r\n' || content.substr(i, 2) === '\n\n') {
            res.push(<>{text}</>);
            res.push(<br/>);
            text = '';
          } else {
            text += char;
          }
        }
        break;
      case 'FINDING_NAME':
        if (char !== ' ') {
          componentName += char;
        } else {
          if (COMPONENTS_NAME[componentName] === undefined) {
            throw new Error(`Name of Component "${componentName}" is not recognized!`);
          } else {
            currState = 'FINDING_IMAGE_NAME';  
          }
        }
        break;
      case 'FINDING_IMAGE_NAME':
        if (char !== '>') {
          fname += char;
        } else {
          currState = 'FOUND_END'; 
        }
        break;
      case 'FOUND_END':
        res.push(<FigureButton key={i} fname={fname} handleSetImage={handleSetImage} />);
        currState = 'FINDING_START';
        componentName = '';
        fname = '';
        text='';
        break;
    }
  }

  return res;
}

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

  function handleSetImage(fname) {
    setIndex(images.findIndex((name) => name === fname));
  }
  
  return (
    <div className={styles.post}>
      <ImageGallery images={images} 
                    index={index} 
                    handleNextClick={handleNextClick} 
                    handlePrevClick={handlePrevClick} 
                    hasNext={hasNext} 
                    hasPrev={hasPrev}/>

      <Description  title={title} 
                    date={date} 
                    content={content}
                    handleSetImage={handleSetImage}
                    />      
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

function Description({ title, date, content, handleSetImage }) {
  let newContent = null;
  try {
    newContent = parseContent(content, handleSetImage);
  } catch (e) {
    console.error(e);
    newContent = '';
  }
  

  return (
    <div className={styles.description}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={`${styles.content} 
                    ${styles.styledScrollbars}`}>
                    {newContent}
      </div>
    </div>
  );
}

function FigureButton({ fname, handleSetImage }) {
  const regExp = /([ \w-]+)\./;
  const match = fname.match(regExp);
  return (
    <button className={styles.figureButton}onClick={() => handleSetImage(fname)}>
      {match[1]}
    </button>
  );
}