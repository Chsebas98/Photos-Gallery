import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
  return (
    <div>
      <div className="card m-2" style={{ width: "17rem" }}>
        <img src={img} className="card-img-top" alt="..."></img>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
