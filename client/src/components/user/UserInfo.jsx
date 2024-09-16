
/* eslint-disable react/prop-types */
export function UserInfo({ userName, name, surname, address, phone, birthYear, birthMonth, birthDay}) {
    return ( <main>
         <table class="table table-striped table-sm">
<thead>
  <tr>
    <th scope="col">Vartotojo vardas</th>
    <th scope="col">Vardas</th>
    <th scope="col">Pavardė</th>
    <th scope="col">Gimimo metai</th>
    <th scope="col">Gimimo mėnuo</th>
    <th scope="col">Gimimo diena</th>
    <th scope="col">Telefonas</th>
    <th scope="col">Adresas</th>
    <th scope="col">E - paštas</th>
    <th scope="col">Slaptažodis</th>
    <th scope="col">Slaptažodis</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>{userName}</td>
    <td>{name}</td>
    <td>{surname}</td>
    <td>{birthYear}</td>
    <td>{birthMonth}</td>   
    <td>{birthDay}</td>
    <td>{phone}</td>
    <td>{address}</td>
    <td>{mail}</td>
    <td>{password}</td>
    <td>{password}</td>
  </tr>
</tbody>
</table>


    </main>
       

    );
}