import React from "react";

const Button = ({ onClick = null, content, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {content}
    </button>
  );
};

export default Button;
