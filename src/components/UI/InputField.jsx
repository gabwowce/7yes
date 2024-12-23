const InputField = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    required = false,
    fullWidth = false,
    name, 
  }) => {
    return (
      <div className={`input-field ${fullWidth ? 'w-full' : 'w-1/2'}`}>
        {label && (
          <label htmlFor={name}>
            {label}
          </label>
        )}
        <input
          type={type}
          id={name}  
          name={name}  
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    );
  };
  
  export default InputField; 
  