import React from "react";
import { useSelector } from "react-redux";
import TextListItem from "./TextListItem";

const TextList = () => {
  const invertedTexts = useSelector((state) => state.texts.texts);
  const loading = useSelector((state) => state.texts.loading);

  return (
    <>
      <h1 className="text-center">Results</h1>
      <hr />

      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Text</th>
            <th scope="col">Palindrome</th>
          </tr>
        </thead>
        <tbody>
          {invertedTexts.map((invertedText, i) => (
            <TextListItem key={i} invertedText={invertedText} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TextList;
