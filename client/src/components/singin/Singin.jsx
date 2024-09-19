// import style from './Registration.module.css'

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

export default function Singin() {
    const {changeLoginStatus} = useContext(GlobalContext)

    const navigate = useNavigate();

    const minUsernameLength = 3;
    const maxUsernameLength = 20;
    const minPasswordLength = 12;
    const maxPasswordLength = 100;

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isFormValidated, setIsFormValidated] = useState(false);
    const [apiResponse, setApiResponse] = useState(null);


    async function submitForm(e) {


        e.preventDefault();

        setIsFormValidated(true);

        let usernameError = '';
        if (username.length < minUsernameLength) {
            usernameError = `Slapyvardis yra per trumpas, turi būti minimum ${minUsernameLength} simbolių`;
        } else if (username.length > maxUsernameLength) {
            usernameError = `Slapyvardis yra per ilgas, turi būti maximum ${maxUsernameLength} simbolių`;
        }
        setUsernameError(usernameError);

        let passwordError = '';
        if (password.length < minPasswordLength) {
            passwordError = `Slaptažodis yra per trumpas, turi būti minimum ${minPasswordLength} simbolių`;
        } else if (password.length > maxPasswordLength) {
            passwordError = `Slaptažodis yra per ilgas, turi būti maximum ${maxPasswordLength} simbolių`;
        }
        setPasswordError(passwordError);

        if (!usernameError && !passwordError) {
            fetch('http://localhost:5026/api/singin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
                .then(res => res.json())
                .then(data => {
                    setApiResponse(data);
                    console.log(data);
                    if (data.status === 'success') {
                        changeLoginStatus(true);
                        navigate('/');
                    }
                })
                .catch(err => console.error(err));
        }
    }
    


    return <>
                <div className="row">
                    <form onSubmit={submitForm} className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <h1 className="h3 mb-3 fw-normal">Prisijungimas</h1>


                        {apiResponse && apiResponse.status === `success` ? <p className="alert alert-success">{apiResponse.data}</p> : null}
                        {apiResponse && apiResponse.status === `error` ? <p className="alert alert-danger">{apiResponse.data}</p> : null}
     

                        <div className="form-floating">
                            <input value={username} onChange={e => setUsername(e.target.value.trim())}
                                type="text" id="username" placeholder="Vartotojo vardas"
                                className={'form-control ' + (isFormValidated ? usernameError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="username">Vartotojo vardas</label>
                            {usernameError && <p className="invalid-feedback">{usernameError}</p>}
                        </div>
                        
                           
                    
                        <div className="form-floating">
                            <input value={password} onChange={e => setPassword(e.target.value)}
                                type="password" id="password" placeholder="Password"
                                className={'form-control ' + (isFormValidated ? passwordError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="password">Slaptažodis</label>
                            {passwordError && <p className="invalid-feedback">{passwordError}</p>}
                        </div>

                    
                        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">Prisijungti</button>
                    </form>
                </div>
  
    
    
   
    </>
}