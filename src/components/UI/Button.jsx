import React from "react";

const Button = ({ onClick = null, content }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="green-button"
    >
      {content}
    </button>
  );
};

export default Button;
