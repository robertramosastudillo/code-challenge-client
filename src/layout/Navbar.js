import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { insertTextAction } from "../redux/actions/textActions";

const Navbar = () => {
  const [formValues, handleInputChange] = useForm({ textToInvert: "" });

  const { textToInvert } = formValues;

  const dispatch = useDispatch();
  const insertText = (textToInvert) => dispatch(insertTextAction(textToInvert));

  const handleSearch = (e) => {
    e.preventDefault();
    insertText(textToInvert);
  };

  return (
    <nav className="navbar navbar-dark bg-nav">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">
          Code Challenge
        </span>
        <form className="d-flex" onClick={handleSearch}>
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
