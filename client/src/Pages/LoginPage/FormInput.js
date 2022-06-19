import React,{useState} from 'react'
import './FormInput.css';

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
    console.log(e);
  };

  return (
    <div className='formInput'>
        <label className='labelstyle'>{label}</label>
        <input
          {...inputProps}
          onChange={onChange} 
          name={props.name}
          onBlur={handleFocus}
          focused={focused.toString()}
          />
          <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput