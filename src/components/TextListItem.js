import React from 'react'

const TextListItem = ({ invertedText }) => {
  return (
    <ol>
      <li>{invertedText}</li>
    </ol>
  );
};
 
export default TextListItem;