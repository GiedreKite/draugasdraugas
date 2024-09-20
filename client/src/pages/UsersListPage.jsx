import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import UsersList from "../components/userList/UsersList";


export function UsersListPage() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                        <UsersList/>
                            
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}