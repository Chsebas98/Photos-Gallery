import React from "react";
import PropTypes from "prop-types";

const Formimg = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-75">
          Buscar: <input className="w-100" type="text" name="inputText"></input>
        </label>
        <button type="submit" className="btn btn-warning m-2">
          <span className="material-icons">search</span>
        </button>
      </form>
    </>
  );
};

Formimg.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Formimg;
