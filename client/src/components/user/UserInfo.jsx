
/* eslint-disable react/prop-types */
export function UserInfo({ username, name, surname, state, phone, mail,password, id}) {
  
  async function submitForm(e) {


    e.preventDefault();

    setIsFormValidated(true);

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

    if (!usernameError && !passwordError) {
        fetch('http://localhost:5026/api/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                'username': username,
                 'name': name, 
                 'surname': surname,
                 'state': state,
                 'phone': phone, 
                 'mail': mail,
                 'password':password,
                 'id': id,

            }),
        })
            .then(res => res.json())
            .then(data => {
                setApiResponse(data);
                console.log(data);
                if (data.status === 'success') {
                    changeLoginStatus(true);
                    navigate('/');
                }
            })
            .catch(err => console.error(err));
    }
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
    <td> <input type="text" value={username} name="username"/></td>
    <td><input type="text" value={name} name="name"/></td>
    <td><input type="text" value={surname} name="surname"/> </td>
    <td><input type="text" value={phone} name="phone"/> </td>
    <td><input type="text" value={mail} name="mail"/> </td>
    <td><input type="text" value={state} name="state"/> </td>
    <td><input type="password" value={password} name="password"/> </td>
    <td><input type="password" value={password} name="password"/> </td>
    <td> <button>Patvirtinti</button> </td>
  </tr>
</tbody>

</table>

</form>

    );
}