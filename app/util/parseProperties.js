/**
 * Parses a string of properties of the form prop_1="..." prop_2="..." ... prop_n="...">
 * 
 * @return {an object or properties} [an object of properties]
 */
export function parseProperties(content, startingIdx) {
  /*
    STATES:
      FINDING_NEXT_PROP
      FINDING_PROP_NAME
      FINDING_EQUAL
      FINDING_STARTING_QUOTE
      FINDING_VALUE
  */
  let currState = 'FINDING_NEXT_PROP';
  let propName = '';
  let propVal = '';
  let props = {};

  for (let i = startingIdx; i <= content.length; i++) {
    const char = content[i];

    switch (currState) {
      case 'FINDING_NEXT_PROP':
        if (char === ' ') {
          continue;
        } else if (char === '>') {
          // END OF LIST OF PROPERTIES
          return [i, props];
        } else {
          propName += char;
          currState = 'FINDING_PROP_NAME';
        }
        break;
      case 'FINDING_PROP_NAME':
        if (char === ' '){
          //found name
          props[propName] = null;
          currState = 'FINDING_EQUAL';
        } else if (char === '=') {
          props[propName] = null;
          currState = 'FINDING_STARTING_QUOTE';  
        } else {
          propName += char;
        }
        break;
      case 'FINDING_EQUAL':
        if (char === '=') {
          currState = 'FINDING_STARTING_QUOTE';
        } else if (char === ' ') {
          continue;
        } else if (char === '\'') {
          currState = 'FINDING_VALUE';
        } else {
          throw new Error(`Bad Syntax`);
        }
        break;
      case 'FINDING_STARTING_QUOTE':
        if (char === '\'') {
          currState = 'FINDING_VALUE';
        } else if (char === ' ') {
          continue;  
        } else {
          throw new Error(`Bad Syntax`);
        }
        break;
      case 'FINDING_VALUE':
        if (char === '\'') {
          //found value
          props[propName] = propVal;
          propName = '';
          propVal = '';
          
          currState = 'FINDING_NEXT_PROP';
        } else {
          propVal += char;
        }
        break;
    }
  }

  // Did not find '>'
  throw new Error(`Bad Syntax`);
}