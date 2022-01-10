import React, { useState } from 'react';

import './Login.css';
import Button from './Button';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputDataUser, setInputDataUser] = useState('');
  const [inputDataPassword, setInputDataPassword] = useState('');
  const navigate = useNavigate();

  const user = {
    username: "admin",
    password: "admin",
  }

  const handleInputUser = (e) => {
    setInputDataUser(e.target.value);
  }
  const handleInputPassword = (e) => {
    setInputDataPassword(e.target.value);
  }

  function VerifyUser() {
    //if (handleInputUser === user.username && handleInputPassword === user.password){
      navigate('/home'); 
    //}  
    return {error: 'Usuário ou senha inválidos'};
  }

  return ( 
    <div>
      <div className="titulo">
        <h1>Calculadora EasyQuant</h1>
      </div>
      <div className="container">
        <div className="usuario">
          Username <br />
          <input onChange={handleInputUser} type="text" value={inputDataUser} className="texto" /> 
        </div>
        <div className="senha">
          Password <br />
          <input onChange={handleInputPassword} type="password" value={inputDataPassword} className="texto" />
        </div>
        <Button onClick={VerifyUser}>Login</Button>  
      </div>
    </div>
  );
}
 
export default Login;