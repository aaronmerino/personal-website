export default function DownArrow({ disabled  }) {
  return(  
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="down arrow">
    <path id="Vector 1" d="M27 10L16 21" stroke={disabled ? "#646464" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path id="Vector 2" d="M16 21L5 10" stroke={disabled ? "#646464" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    </svg>
  );
}