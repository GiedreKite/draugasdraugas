// import style from './Registration.module.css'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
    const minUsernameLength = 3;
    const maxUsernameLength = 20;
    const minPasswordLength = 12;
    const maxPasswordLength = 100;
    const maxMailLength = 50;
    const minPhoneLength = 7;
    const maxPhoneLength = 15;

    const navigate = useNavigate();

    const [apiResponse, setApiResponse] = useState(null);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [nameError, setNameError] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [mailError, setMailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repassword, setRepassword] = useState('');
    const [repasswordError, setRepasswordError] = useState('');
    const [isFormValidated, setIsFormValidated] = useState(false);

    function submitForm(e) {
        e.preventDefault();

        setIsFormValidated(true);

        let usernameError = '';
        if (username.length < minUsernameLength) {
            usernameError = `Slapyvardis yra per trumpas, turi būti mažiausiai ${minUsernameLength} simboliai`;
        } else if (username.length > maxUsernameLength) {
            usernameError = `Slapyvardis yra per ilgas, turi būti daugiausiai ${maxUsernameLength} simbolių`;
        }
        setUsernameError(usernameError);

        let nameError = '';
        if (name.length < minUsernameLength) {
            nameError = `Vardas yra per trumpas, turi būti mažiausiai ${minUsernameLength} simboliai`;
        } else if (name.length > maxUsernameLength) {
            nameError = `Vardas yra per ilgas, turi būti daugiausiai ${maxUsernameLength} simbolių`;
        }
        setNameError(nameError);

        let surnameError = '';
        if (surname.length < minUsernameLength) {
            surnameError = `Pavardė yra per trumpa, turi būti mažiausiai ${minUsernameLength} simboliai`;
        } else if (surname.length > maxUsernameLength) {
            surnameError = `Pavardė yra per ilgas, turi būti daugiausiai ${maxUsernameLength} simbolių`;
        }
        setSurnameError(surnameError);

        let repasswordError = '';
        if (repassword !== password ) {
            repasswordError = `Slaptažodžiai nesutampa`;
        } 
        setRepasswordError(repasswordError);



        let mailError = '';
        if (mail.length < minUsernameLength) {
            mailError = `Elektroninis paštas yra per trumpas, turi būti mažiausiai ${minUsernameLength} simboliai`;
        } else if (mail.length > maxMailLength) {
            mailError = `Elektroninis paštas yra per ilgas, turi būti daugiausiai ${maxMailLength} simbolių`;
        }
        setMailError(mailError);
        
        let phoneError = '';
        if (phone.length < minPhoneLength) {
            phoneError = `Pavardė yra per trumpa, turi būti mažiausiai ${minPhoneLength} simboliai`;
        } else if (phone.length > maxPhoneLength) {
            phoneError = `Pavardė yra per ilgas, turi būti daugiausiai ${maxPhoneLength} simbolių`;
        }
        setPhoneError(phoneError);

        let passwordError = '';
        if (password.length < minPasswordLength) {
            passwordError = `Slaptažodis yra per trumpas, turi būti mažiausiai ${minPasswordLength} simbolių`;
        } else if (password.length > maxPasswordLength) {
            passwordError = `Slaptažodis yra per ilgas, turi būti daugiausiai ${maxPasswordLength} simbolių`;
        }
        setPasswordError(passwordError);

        if (!usernameError && !passwordError) {
            fetch('http://localhost:5026/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    name,
                    surname,
                    phone,
                    mail,
                }),
            })

            .then(res => res.json())
            .then(data => setApiResponse(data))
            .catch(err => console.error(err))
              console.log('siunciame duomenis i serveri registracijai...')
              if (data.status === 'success') {
                changeLoginStatus(true);
                navigate('/');
            }
          }
        
    }


    return <>
                <div className="row">
                    <form onSubmit={submitForm} className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <h1 className="h3 mb-3 fw-normal">Registracija</h1>
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
                            <input value={name} onChange={e => setName(e.target.value.trim())}
                                type="text" id="name" placeholder="Vardas"
                                className={'form-control ' + (isFormValidated ? nameError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="name">Vardas</label>
                            {nameError && <p className="invalid-feedback">{nameError}</p>}
                        </div>
                        <div className="form-floating">
                            <input value={surname} onChange={e => setSurname(e.target.value.trim())}
                                type="text" id="surname" placeholder="Pavardė"
                                className={'form-control ' + (isFormValidated ? surnameError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="surname">Pavardė</label>
                            {surnameError && <p className="invalid-feedback">{surnameError}</p>}
                        </div>
                        <div className="form-floating">
                            <input value={phone} onChange={e => setPhone(e.target.value.trim())}
                                type="text" id="phone" placeholder="Telefono numeris"
                                className={'form-control ' + (isFormValidated ? phoneError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="phone">Telefono numeris</label>
                            {phoneError && <p className="invalid-feedback">{phoneError}</p>}
                        </div>
                        <div className="form-floating">
                            <input value={mail} onChange={e => setMail(e.target.value.trim())}
                                type="mail" id="mail" placeholder="Elektroninis paštas"
                                className={'form-control ' + (isFormValidated ? mailError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="mail">Elektroninis paštas</label>
                            {mailError && <p className="invalid-feedback">{mailError}</p>}
                        </div>
                   
                    
                        <div className="form-floating">
                            <input value={password} onChange={e => setPassword(e.target.value)}
                                type="password" id="password" placeholder="Slaptažodis"
                                className={'form-control ' + (isFormValidated ? passwordError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="password">Slaptažodis</label>
                            {passwordError && <p className="invalid-feedback">{passwordError}</p>}
                        </div>

                        <div className="form-floating">
                            <input value={repassword} onChange={e => setRepassword(e.target.value)}
                                type="repassword" id="repassword" placeholder="Pakartotinas slaptažodis"
                                className={'form-control ' + (isFormValidated ? repasswordError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="repassword">Pakartokite slaptažodį</label>
                            {repasswordError && <p className="invalid-feedback">{repasswordError}</p>}
                        </div>

                        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">Registruotis</button>
                    </form>
                </div>
   
    </>
}