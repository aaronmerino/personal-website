'use client'
import { parseProperties } from '../util/parseProperties';
import Image from 'next/image';
import styles from './post.module.css'
import UpArrowIcon from '../icons/UpArrow'
import DownArrowIcon from '../icons/DownArrow'
import { useState } from 'react';




function HighlightedText({ text, backgroundColor }) {
  switch (backgroundColor.toLowerCase()) {
    case 'red':
      return (
        <span className={styles.highlightRed}>{text}</span>
      );

    case 'yellow':
      return (
        <span className={styles.highlightYellow}>{text}</span>
      );

    case 'green':
      return (
        <span className={styles.highlightGreen}>{text}</span>
      );

    case 'cyan':
      return (
        <span className={styles.highlightCyan}>{text}</span>
      );
    default:
      return (
        <span className={styles.highlightDefault}>{text}</span>
      ); 
  }

}

function FigureButton({ fname, handleSetImage }) {
  const regExp = /([ \w-]+)\./;
  const match = fname.match(regExp);
  return (
    <button className={styles.figureButton} onClick={() => handleSetImage(fname)}>
      {`figure: ${match[1]}`}
    </button>
  );
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

  /**
   * This is a factory function that will return a component based on a components name and an object with its properties
   * @param  {string} componentName [name of the component to be made]
   * @param  {int} key [key value for React purposes]
   * @param  {object} props [an object of properties of a component]
   * @return {react component} [a react component based on component name, or throws an error if it does not exist]
   */

  function postContentComponentsFactory(componentName, key, props) {
    let res = null;

    switch (componentName) {
      case 'FigureButton':
        const allProps = { ...props, handleSetImage: handleSetImage };
        res = <FigureButton key={key} { ...allProps } />;
        break;
      case 'HighlightedText':
        res = <HighlightedText key={key} { ...props } />;
        break;
      default:
        throw new Error(`Name of Component "${componentName}" is not recognized!`);
    }

    return res;
  }

  /**
   * This function will parse a string and convert it into a list of React Components that can be rendered.
   * The content contain normal text as well as strings of the form <FigureButton folder/images/image.png|jpg> that can be parsed into a UI component.
   * @param  {string} content [String to be parsed]
   * @return {[React Components]} [list of Components that React can render]
   */

  function parseContent(content) {
    /**
    STATES: 
      FINDING_START (looking for '<')
      FINDING_NAME (looking for '<name ...')
      FINDING_PROPERTIES (looking for '<... prop_1=val_1 prop_2=val_2 ... prop_n=val_n')
    */
    let res = [];
    let text = '';
    let currState = 'FINDING_START';
    let componentName = '';

    for (let i = 0; i < content.length; i++) {
      let char = content[i];
      switch (currState) {
        case 'FINDING_START':
          if (char === '<') {
            if (text !== '') res.push(<>{text}</>);
            currState = 'FINDING_NAME';
          } else {
            if (content.substr(i, 1) === '\n') {
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
            currState = 'FINDING_PROPERTIES';  
          }
          break;
        case 'FINDING_PROPERTIES':
          const [newIdx, props] = parseProperties(content, i);  
          res.push(postContentComponentsFactory(componentName, i, props));

          currState = 'FINDING_START';
          componentName = '';
          text='';
          i = newIdx;
          break;
      }
    }

    return res;
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
                    content={parseContent(content)}
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
              quality={100}
              height={440} 
              width={440} 
              alt="" />
    </div>
  );
}

function Description({ title, date, content }) {
  // let newContent = null;
  // try {
  //   newContent = parseContent(content, handleSetImage);
  // } catch (e) {
  //   console.error(e);
  //   newContent = '';
  // }
  

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

