// import style from './Registration.module.css'

import { useState } from "react";

export default function Singin() {
  

    const [username, setUsername] = useState('');

    const [usernameError, setUsernameError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const [isFormValidated, setIsFormValidated] = useState(false);

    async function submitForm(e) {
        e.preventDefault();

        setIsFormValidated(true);



       
            const resp = await fetch('http://localhost:5026/api/singin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            console.log(resp);

            if(resp.ok){
                //duomenis nuskaitom, nueinam i norima puslapi
                //data=resp.json()
                //user = data['data']
                //message = data['message']
                window.location="/";
                console.log('Pavyko');
                
            }
            else{
                //error=resp.text()
                console.log(resp.text());
            }
        }
    


    return <>
                <div className="row">
                    <form onSubmit={submitForm} className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <h1 className="h3 mb-3 fw-normal">Prisijungimas</h1>

                        <div className="form-floating">
                            <input value={username} onChange={e => setUsername(e.target.value.trim())}
                                type="text" id="username" placeholder="Vartotojo vardas"
                                className={'form-control ' + (isFormValidated ? usernameError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="username">Spapyvardis</label>
                            {usernameError && <p className="invalid-feedback">{usernameError}</p>}
                        </div>
                        
                           
                    
                        <div className="form-floating">
                            <input value={password} onChange={e => setPassword(e.target.value)}
                                type="password" id="password" placeholder="Password"
                                className={'form-control ' + (isFormValidated ? passwordError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="password">Spaltažodis</label>
                            {passwordError && <p className="invalid-feedback">{passwordError}</p>}
                        </div>

                    
                        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">Registruotis</button>
                    </form>
                </div>
  
    
    
   
    </>
}