import { useState } from 'react';

const Checkbox = ({label, className = null, checked = false}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="check-box">
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleChange} 
      />
      <label className={className}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
