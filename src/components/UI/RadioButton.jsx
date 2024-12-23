const RadioButton = ({ name, value, checked, onChange }) => {
    return (
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="ratio-btn"
      />
    );
  };
  
  export default RadioButton;
  