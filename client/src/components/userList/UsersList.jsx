
/* eslint-disable react/prop-types */
export default function UsersList({ username, name, surname, state, phone, mail,password, id}) {
  
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
          fetch('http://localhost:5026/api/user', {
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
                  console.log(data[0]);
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
         
      
  
  
      <input type="text" defaultValue={username}  name="username_new"/>
      <label htmlFor="username">Vartotojo vardas</label>
     <input type="text" defaultValue={name} name="name_new"/>
     <label htmlFor="username">Vardas</label>
     <input type="text" defaultValue={surname}  name="surname_new"/> 
     <label htmlFor="username">Pavardė</label>
     <input type="text" defaultValue={phone}  name="phone_new"/> 
     <label htmlFor="username">Telefono numeris</label>
     <input type="text" defaultValue={mail}  name="mail_new"/> 
     <label htmlFor="username">Elektroninis paštas</label>
     <input type="text" defaultValue={state}  name="state_new"/> 
     <label htmlFor="username">Vartotojo teisės</label>
     <input type="password" defaultValue={password}  name="password_new"/> 
     <label htmlFor="username">Slaptažodis</label>
     <input type="password" defaultValue={password}  name="password_new_2"/> 
     <label htmlFor="username">Pakartotinas slaptažodis</label>
      <button>Patvirtinti</button> 
    

  
  </form>
  
      );
  }