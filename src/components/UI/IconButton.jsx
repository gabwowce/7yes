import React from "react";

const IconButton = ({ icon, onClick, className  }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
