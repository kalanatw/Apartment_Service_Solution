import FormInput from './FormInput';
import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Homepage from '../HomePage/homepage';
//import SideBarImg from './img/sidepic.png';

function Login2() {

  const [values, setValues] = useState({
    username: " ",
    password: " "
  });
 
  const inputs =[
    {
      id: 1,
      name: "Username",
      type: "text",
      placeholder: "Username",
      errorMessage: 
          "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username:",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      
    },
    {
      id: 2,
      name: "Password",
      type: "Password",
      placeholder: "Password",
      errorMessage: 
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password:",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  return (
    <div className='mainContainer'>
        {/*<img src={SideBarImg}  alt="welcome image" className='welcomepic' />*/}
      <div className='login-container'>
        <form onSubmit={handleSubmit}>
        <div className='loginStyles'>
        <h1>Administrator Login</h1>
          <div className='inputFiels'>

          {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className='buttonStyle'>
            <Link to="/Homepage">
                <button variant="primary" type="submit" className='log'>Login</button>
          </Link>
            </div>

            </div>
          </div>
          
        </form>
      </div>

    </div>
  );
};

export default Login2;
