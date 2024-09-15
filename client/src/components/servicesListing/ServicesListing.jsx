import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ServiceCard } from "../serviceCard/ServiceCard";


export function LocationListing() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5026/api/services')
            .then(res => res.json())
            .then(obj => {
                if (typeof obj !== 'object') {
                    throw new Error('Is serverio atejo ne objektas');
                } else {
                    setLocations(obj.data);
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
                        {locations.map((location, index) => <ServiceCard key={index} {...location} />)}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}