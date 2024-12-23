import RadioButton from "../UI/RadioButton";

const OptionTemplate = ({ label, description, price, name, value, checked, onChange }) => {
    return (
        <div className="option-template">
          <div className="first-row">
            <div>
              <RadioButton
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
              />
              <label htmlFor={value}> 4755
                {label}
              </label>
            </div>
            <p className="price">{price}</p>
          </div>
    
          <div className="second-row">
            <p className="description">{description}</p>
          </div>
        </div>
      );
    };
    

export default OptionTemplate;
