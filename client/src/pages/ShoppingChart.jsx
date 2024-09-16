import Chart from "../components/chart/Chart";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export function ShoppingChart() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <Chart/>
                            
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}