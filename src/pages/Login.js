import {Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useState } from 'react';
import firebaseAuth from '../config/firebaseAuth';
import {signInWithEmailAndPassword } from "firebase/auth";

function Login (){
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });
    
      const onloginClick =() => {
        const {email,password} = credentials
        signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      };
    
      const onValueChange = (event,label) =>{
        const value = event.target.value;
        setCredentials((prevState) => ({
          ...prevState,
          [label]: value,
        }));
    };

    return(
<>
<h5>Login</h5>
<Form>
  <FormGroup>
    <Label>Email</Label>
    <Input onChange={event => onValueChange(event, 'email')}/>
  </FormGroup>
  <FormGroup>
    <Label>Password</Label>
    <Input onChange={event => onValueChange(event, 'password')} type='password' />
  </FormGroup>
  <Button onClick={onloginClick}>Login</Button>
</Form>
</>
    )
}

export default Login;