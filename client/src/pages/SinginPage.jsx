import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import Singin from "../components/singin/Singin";


export function SinginPage() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <Singin/>
                            
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}