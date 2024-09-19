
/* eslint-disable react/prop-types */
export function UserInfo({ username, name, surname, state, phone, mail,password, id}) {
  
  async function submitForm(e) {


    e.preventDefault();

    // setIsFormValidated(true);

    // let usernameError = '';
    // if (username.length < minUsernameLength) {
    //     usernameError = `Slapyvardis yra per trumpas, turi būti minimum ${minUsernameLength} simbolių`;
    // } else if (username.length > maxUsernameLength) {
    //     usernameError = `Slapyvardis yra per ilgas, turi būti maximum ${maxUsernameLength} simbolių`;
    // }
    // setUsernameError(usernameError);

    // let passwordError = '';
    // if (password.length < minPasswordLength) {
    //     passwordError = `Slaptažodis yra per trumpas, turi būti minimum ${minPasswordLength} simbolių`;
    // } else if (password.length > maxPasswordLength) {
    //     passwordError = `Slaptažodis yra per ilgas, turi būti maximum ${maxPasswordLength} simbolių`;
    // }
    // setPasswordError(passwordError);

    // if (!usernameError && !passwordError) {
    console.log(e.target.elements)
    const sendData={
      'username': e.target.elements['username_new'].value,
      'name': e.target.elements['name_new'].value, 
      'surname': e.target.elements['surname_new'].value,
      'state': e.target.elements['state_new'].value,
      'phone': e.target.elements['phone_new'].value, 
      'mail': e.target.elements['mail_new'].value,
      'password':e.target.elements['password_new'].value,
      'id': id,

 };
 console.log(sendData)
        fetch('http://localhost:5026/api/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(sendData),
        })
            .then(res => res.json())
            .then(data => {
                // setApiResponse(data);
                console.log(data);
                // if (data.status === 'success') {
                    // changeLoginStatus(true);
                    // navigate('/');
                // }
            })
            .catch(err => console.error(err));
    // }
}
    return (
      <form action="" onSubmit={submitForm}>
         <table className="table table-striped table-sm">
    
<thead>
  <tr>
    <th scope="col">Vartotojo vardas</th>
    <th scope="col">Vardas</th>
    <th scope="col">Pavardė</th>
    <th scope="col">Telefonas</th>
    <th scope="col">E - paštas</th>
    <th scope="col">Vartotojo teisės</th>
    <th scope="col">Slaptažodis</th>
    <th scope="col">Slaptažodis</th>
    <th>Patvirtinti</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td> <input type="text" defaultValue={username}  name="username_new"/></td>
    <td><input type="text" defaultValue={name} name="name_new"/></td>
    <td><input type="text" defaultValue={surname}  name="surname_new"/> </td>
    <td><input type="text" defaultValue={phone}  name="phone_new"/> </td>
    <td><input type="text" defaultValue={mail}  name="mail_new"/> </td>
    <td><input type="text" defaultValue={state}  name="state_new"/> </td>
    <td><input type="password" defaultValue={password}  name="password_new"/> </td>
    <td><input type="password" defaultValue={password}  name="password_new_2"/> </td>
    <td> <button>Patvirtinti</button> </td>
  </tr>
</tbody>

</table>

</form>

    );
}