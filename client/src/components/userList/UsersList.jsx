import style from './UsersList.module.css'

export default function UsersList() {

    return <>

    
    <main>
                <div class="flex">
                    <h1>Visos paskyros</h1>
                    <a class="btn" href="/create-account">+ Nauja</a>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Vartotojo vardas</td>
                            <td>Vardas</td>
                            <td>Pavardė</td>
                            <td>Gimimo metai</td>
                            <td>Gimimo mėnuo</td>
                            <td>Gimimo diena</td>
                            <td>Adresas</td>
                            <td>Telefonas</td>
                            <td>E-paštas</td>
                            <td>Vartotojas</td>
                            <td>Slaptažodis</td>

                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <td>#</td>
                            <td>Vartotojo vardas</td>
                            <td>Vardas</td>
                            <td>Pavardė</td>
                            <td>Gimimo metai</td>
                            <td>Gimimo mėnuo</td>
                            <td>Gimimo diena</td>
                            <td>Adresas</td>
                            <td>Telefonas</td>
                            <td>E-paštas</td>
                            <td>Admin</td>
                            <td>Slaptažodis</td>
                        </tr>
                    </tbody>
                </table>
                
            </main>
    
    
   
    </>
}