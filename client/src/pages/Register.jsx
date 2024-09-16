import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import Registration from "../components/registration/Registration";
import { UserInfo } from "../components/user/UserInfo";


export function Register() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <UserInfo/>
                        <Registration/>
                            
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}