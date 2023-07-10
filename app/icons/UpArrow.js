export default function UpArrow({ disabled }) {
  return(  
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="up arrow">
    <path id="Vector 1" d="M5 21L16 10" stroke={disabled ? "#646464" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path id="Vector 2" d="M16 10L27 21" stroke={disabled ? "#646464" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    </svg>
  );
}