import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import Registration from "../components/registration/Registration";



export function Register() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <Registration/>
                            
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}