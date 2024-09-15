import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import LoginOn from "../components/login/LoginOn";

export function Login() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <LoginOn />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}