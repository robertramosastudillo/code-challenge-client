import React from "react";

const TextListItem = ({ invertedText }) => {
  const { text, palindrome } = invertedText;

  return (
    <tr>
      <td>{text}</td>
      <td>{palindrome ? "Yes" : "No"}</td>
    </tr>
  );
};

export default TextListItem;
