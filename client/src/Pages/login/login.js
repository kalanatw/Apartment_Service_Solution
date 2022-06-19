//import logo from './logo.svg';
import './login.css';
import profile from "../../components/images/bx_bxs-user.png";
import sidepic from "../../components/images/sidepic.png";
import Home from '@mui/icons-material/Home';
function LoginPage() {
  return (
    <div className="main">
         
         <img src={sidepic}  className='welcomepic' />

      <div className="login-container">
        
          <div className ="imgs">
             
              <img src={profile} alt="profile" />
            
          </div>

          <div className="form">
            
            <h1> Administrator Login</h1>
            <div className="merg">
            <div className="un">
              <h3> Username</h3>
              <input type="text" id="uname" className="name"></input>
            </div>
            <div className="pw">
              <h3> Password</h3>
              <input type="password" id="uname" className="name"></input>
            </div>
            <br></br>

            <div className='logintable'>
            <table>
              <td>
              <input type="checkbox" name="rm" id="rmm"></input> Remember me 
              </td>
              <td>
                Forgot password?
              </td>
            </table>
            </div>

            <div className="login">
            <button onClick={Home}>Login</button>
            </div> <br>
            </br>


            
          
          
            </div>
          </div>
             
        </div>

      </div>
    
  );
}

export default LoginPage;