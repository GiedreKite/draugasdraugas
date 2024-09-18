// import style from './Registration.module.css'

import { useState } from "react";

export default function Service() {


  
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [state, setState] = useState('');

    const [nameError, setNameError] = useState('');
    const [aboutError, setAboutError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [imgError, setImgError] = useState('');
    

   const maxName =50
   const maxAbout =500
   const maxPrice =9999.99
   const maxImg =250
  

    const [isFormValidated, setIsFormValidated] = useState(false);

    function submitForm(e) {
        e.preventDefault();

        setIsFormValidated(true);

     

        let nameError = '';
        if (name.length > maxName) {
            nameError = `Vardas yra per trumpas, turi būti mažiausiai ${maxName} simboliai`;
        } 
        setNameError(nameError);

        let aboutError = '';
        if (about.length > maxAbout) {
            aboutError = `Pavardė yra per trumpa, turi būti mažiausiai ${maxAbout} simboliai`;
        } 
        setAboutError(aboutError);

        let priceError = '';
        if (price.length > maxPrice) {
            priceError = `Elektroninis paštas yra per trumpas, turi būti mažiausiai ${maxPrice} simboliai`;
        }
        setPriceError(priceError);
        
        let imgError = '';
        if (img.length > maxImg) {
            imgError = `Pavardė yra per trumpa, turi būti mažiausiai ${maxImg} simboliai`;
        } 
        setImgError(imgError);


        if (!nameError && !aboutError && !priceError && !imgError) {
            fetch('http://localhost:5026/api/service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    about,
                    price,
                    img,
                    state,
                }),
            });
        }
    }


    return <>
                <div className="row">
                    <form onSubmit={submitForm} className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <h1 className="h3 mb-3 fw-normal">Paslaugos įvedimas</h1>

                       
                        <div className="form-floating">
                            <input value={name} onChange={e => setName(e.target.value.trim())}
                                type="text" id="name" placeholder="Paslaugos pavadinimas"
                                className={'form-control ' + (isFormValidated ? nameError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="name">Paslaugos pavadinimas</label>
                            {nameError && <p className="invalid-feedback">{nameError}</p>}
                        </div>
                        <div className="form-floating">
                            <input value={about} onChange={e => setAbout(e.target.value.trim())}
                                type="text" id="about" placeholder="Paslaugos apibūdinimas"
                                className={'form-control ' + (isFormValidated ? aboutError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="about">Paslaugos apibūdinimas</label>
                            {aboutError && <p className="invalid-feedback">{aboutError}</p>}
                        </div>
                        <div className="form-floating">
                            <input value={price} onChange={e => setPrice(e.target.value.trim())}
                                type="text" id="price" placeholder="Kaina"
                                className={'form-control ' + (isFormValidated ? priceError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="price">Kaina</label>
                            {priceError && <p className="invalid-feedback">{priceError}</p>}
                        </div>

                        <div className="form-floating">
                            <input value={img} onChange={e => setImg(e.target.value.trim())}
                                type="img" id="img" placeholder="Nuotraukos nuoroda"
                                className={'form-control ' + (isFormValidated ? imgError ? 'is-invalid' : 'is-valid' : '')} />
                            <label htmlFor="img">Nuotraukos nuoroda</label>
                            {imgError && <p className="invalid-feedback">{imgError}</p>}
                        </div>
                   
                    
                        <div className="form-floating">
                            <input value={state} onChange={e => setState(e.target.value)}
                                type="state" id="state" placeholder="Būsena, neprivalomas laukelis"
                                className='form-control ' />
                            <label htmlFor="state">Būsena, neprivalomas laukelis</label>
                           
                        </div>


                        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">Patvirtinti naują paslaugą</button>
                    </form>
                </div>
  
    
    
   
    </>
}