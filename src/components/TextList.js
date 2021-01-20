import React from "react";
import { useSelector } from "react-redux";
import Alert from "../layout/Alert";
import Spinner from "../layout/Spinner";
import TextListItem from "./TextListItem";

const TextList = () => {
  const invertedTexts = useSelector((state) => state.texts.texts);
  const loading = useSelector((state) => state.texts.loading);

  return (
    <div className="container p-4">
      <h1 className="text-center">Results</h1>
      <hr />

      {loading ? (
        <Spinner />
      ) : (
        <table className="table table-striped text-center ">
          <thead className="bg-nav">
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
      )}
      {invertedTexts.length === 0 && loading === false ? <Alert /> : null}
    </div>
  );
};

export default TextList;
