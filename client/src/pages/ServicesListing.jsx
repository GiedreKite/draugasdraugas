import { useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { ServiceCard } from "../components/serviceCard/ServiceCard";



export function ServicesListing() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5026/api/services')
            .then(res => res.json())
            .then(obj => {
                if (typeof obj !== 'object') {
                    throw new Error('Is serverio atejo ne objektas');
                } else {
                    setServices(obj.data);
                    console.log(obj.data);
                }
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Paslaugų sąrašas:</h1>
                            <p>Prašau pasirinkti paslaugą!</p>
                        </div>
                    </div>
                </div>
                <div className="container px-4 py-5">
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                        {services.map((service, index) => <ServiceCard key={index} {...service} />)}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}