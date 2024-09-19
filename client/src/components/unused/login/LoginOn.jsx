import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import style from './LoginOn.module.css';

function LoginOn() {
    const initialValues = {
        username: "",
        name: "",
        surname: "",
        adress: "",
        phone: "",
        mail: "",
        password: "",
        confirmPassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Vartotojo prisijungimo vardas privalomas!";
        }
        if (!values.name) {
            errors.name = "Vartotojo vardas privalomas!";
        }
        if (!values.surname) {
            errors.surname = "Vartotojo pavardė privaloma!";
        }
        if (!values.phone) {
            errors.phone = "Telefono numeris yra privalomas!";
        }
        if (!values.adress) {
            errors.adress = "Jūsų adresas yra privalomas!"; 
        }   
        if (!values.email) {
            errors.email = "Privalomas elektroninis paštas!";
        } else if (!regex.test(values.email)) {
            errors.email = "Neleistinas elektroninis paštas!";
        }
        if (!values.password) {
            errors.password = "Slaptažodis yra privalomas.";
        } else if (values.password.length < 4) {
            errors.password = "Slaptažodis turi būti ilgesnis nei 4 simboliai";
        } else if (values.password.length > 10) {
            errors.password = "Slaptažodis turi būti trumpesnis nei 10 simbolių";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Slaptažodžiai nesutampa, prašome ppakartoti";
        }
        return errors;
    };

    return ( <main>
        <div className="bgImg"></div>
            <div className={style.container}>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">
                        Prisijungta sėkmingai
                    </div>
                ) : (
                    console.log("Entered Details", formValues)
                )}

                <form onSubmit={handleSubmit}>
                    <h1>Registracijos forma: </h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label>Vartotojo vardas</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Pasirinkite vartotojo vardą"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.username}</p>
                        <div className="field">
                        <label>Vardas</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Įveskite savo vardą"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.surname}</p>
                        <div className="field">
                        <label>Pavardė</label>
                            <input
                                type="text"
                                surname="surname"
                                placeholder="Įveskite savo pavardę"
                                value={formValues.surname}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.surname}</p>
                        <div className="field">
                            <label>Elektroninis paštas</label>
                            <input
                                type="text"
                                name="mail"
                                placeholder="Elektroninis paštas"
                                value={formValues.mail}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.phone}</p>
                        <div className="field">
                            <label>Telefono numeris</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Telefonas"
                                value={formValues.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.phone}</p>
                        <div className="field">
                            <label>Adresas</label>
                            <input
                                type="text"
                                name="adress"
                                placeholder="adresas"
                                value={formValues.adress}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.adress}</p>
                        <div className="field">
                            <label>Slaptažodis</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Slaptažodis"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.password}</p>
                        <div className="field">
                            <label>Pakartokite slaptažodį</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Pakartokite slaptažodį"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.confirmPassword}</p>
                        <button className="fluid ui button blue">Submit</button>
                    </div>
                </form>
                <div className="text">
                    Jau turi paskyrą?  <Link to="/login" className="btn btn-outline-primary me-2">Prisijungti</Link>
                </div>
            </div>{" "}

    </main> );
}

export default LoginOn;