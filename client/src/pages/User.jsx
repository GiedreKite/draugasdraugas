import { useEffect, useState } from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { UserInfo } from "../components/user/UserInfo";




export function User() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5026/api/users')
            .then(res => res.json())
            .then(obj => {
                if (typeof obj !== 'object') {
                    throw new Error('Is serverio atejo ne objektas');
                } else {
                    setUser(obj.data);
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
                            <h1>Vartotojo informacija:</h1>
                            
                        </div>
                    </div>
                </div>
                <div className="container px-4 py-5">
                    <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
                        {users.map((user, index) => <UserInfo key={index} {...user} />)}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}