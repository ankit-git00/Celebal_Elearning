
import { useEffect, useState ,useContext} from 'react';
import UseAuth from '../UseAuth';
import { authContext } from '../Authprovider';
// import './Login.css';


function Login() {

  const {isLoggedIn, setIsLoggedIn}= useContext(authContext);
  const initialValues = { username: "", email: "", password: "" }

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [e.target.name]: e.target.value }); // ...formValues, to changes only one key and keep the rest same

    // console.log(formValues.value);
  }

const handleSubmit = (e) =>{
  e.preventDefault();
  // console.log("submitting")

  setErrors(validate(formValues));  // function will return erros object.
  setIsSubmit(true);
  if(Object.keys(formErrors).length === 0 && isSubmit) {
    // window.location.reload(false);
    setIsLoggedIn(true);

  } 

}

useEffect( ()=>{
  console.log(formErrors);
},[formErrors]) // useeffect runs when formErros changes.

const validate = (values)=>{
  const errors={};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

if(!values.username){
  errors.username="Username is Required";
}

if(!values.password){
errors.password= "Password is Required"}
else if(values.password.length<4){
  errors.password="Min 4 characters";
}

else if(values.password.length>10){
  errors.password="Max 10 characters";
}

if(!values.email){
  errors.email = "Email is Required";
}
else if (!regex.test(values.email)) {
  errors.email = "This is not a valid email format!";
}



return errors;
}
  return (
    <div className=" ui container">
    {/* <pre>{JSON.stringify(formValues)}</pre> */}
    {Object.keys(formErrors).length === 0 && isSubmit ? ( <div className='ui huge message green '>Signed In</div>) : ""}
   
      <form onSubmit={handleSubmit}>
        <h1>Login To Your Account</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>UserName</label>
            <input type='text' name='username' placeholder='Username' value={formValues.username} onChange={handleChange} />
        
          </div>
          <p>{formErrors.username}</p>
          <div className='field'>
            <label>Email</label>
            <input type='email' name='email' placeholder='Email' value={formValues.email} onChange={handleChange} />
          </div>
          <p>{formErrors.email}</p>
          <div className='field'>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' value={formValues.password} onChange={handleChange} />
          </div>
        </div>
        <p>{formErrors.password}</p>
        <div className='ui fluid button green' onClick={handleSubmit}>Submit</div>
      </form>

    </div>
  );
}

export default Login;
