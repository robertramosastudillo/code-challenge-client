import React, { useEffect, useState } from "react";
import TextListItem from "./TextListItem";

const TextList = () => {
  const [invertedTexts, setInvertedTexts] = useState([]);

  useEffect(() => {
    setInvertedTexts(["Prueba 1", "Prueba 2", "Prueba 3"]);
  }, []);

  return (
    <>
      <h1 className="text-center">Results</h1>

      {invertedTexts.map((invertedText) => (
        <TextListItem key={invertedText} invertedText={invertedText} />
      ))}
    </>
  );
};

export default TextList;
