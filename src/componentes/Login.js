import React from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
   

    const submitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        
        const regexEmail =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email === "" || password === "") {
            swAlert(
                <h2>Los campos no pueden estar vacios</h2>
            )
            // console.log("Los campos no pueden estar vacios")
            return;
        }

        if (email !== "" && !regexEmail.test(email)) {
            swAlert(<h2>Debes escribir una dirección de correo electrónico válida</h2>)
            
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert(<h2>Credenciales inválidas</h2>);
            return;
        }
        


        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                // swAlert("Perfecto", "Ingresaste Correctamente", "success")
                // console.log(res.data)
                // const tokenRecibido = res.data.token;
                // sessionStorage.setItem('token',tokenRecibido)
                navigate("/listado")
            })

         
    }

    return (
        <div className="container">
            
            <form onSubmit={submitHandler} >
            <div>
            <h2>Login</h2>
            <div className='credentials'>
            <h6>Credentials</h6>
            <p>Email: challenge@alkemy.org</p>
            <p>Password: react</p>
            </div>
            <input
                //type="email" 
                type="text"
                name="email"
                placeholder='email'
            />
            <br />
            <input
                type="password"
                name="password"
                placeholder='password'
            />
            <br />
            <button type='submit'>Login</button>
            </div>
        </form>
        </div>
        
    );
};

export default Login;