import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { insertTextAction } from "../redux/actions/textActions";

const Navbar = () => {
  const [formValues, handleInputChange, reset] = useForm({ textToInvert: "" });
  const { textToInvert } = formValues;

  const dispatch = useDispatch();
  const insertText = (textToInvert) => dispatch(insertTextAction(textToInvert));

  const handleSend = (e) => {
    e.preventDefault();

    if (textToInvert.trim() === "") return;

    insertText(textToInvert);
    reset();
  };

  return (
    <nav className="navbar navbar-dark bg-nav">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">
          Code Challenge
        </span>
        <form className="d-flex" onSubmit={handleSend}>
          <input
            className="form-control me-2"
            type="text"
            placeholder="Enter a text"
            aria-label="textToInvert"
            name="textToInvert"
            value={textToInvert}
            onChange={handleInputChange}
          />
          <button className="btn btn-success" type="submit">
            Send
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
