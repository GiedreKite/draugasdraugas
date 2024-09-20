import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Notexist } from "../components/notexist/Notexist";



export function NotFound() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <Notexist/>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}