import React, { useState } from "react";
import { Blok, InputEmail, InputFirstName, InputLastName, InputPassword } from "./style";

const App = () => {
  const [state, setState] = useState({ roleIdSet: [1] });

  const onClick = () => {
    fetch("https://houzing-app.herokuapp.com/api/public/auth/register",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
  };

  const onRegister = ({ target: {name, value}  }) => {
    setState({ ...state, [name]: value });
  };
  return (
    <Blok>
    <h1>Sign up for a free account</h1>
      <InputEmail
        onChange={onRegister}
        name="email"
        placeholder="Email address"
        type="text"
      />
      <InputLastName
        onChange={onRegister}
        name="firstname"
        placeholder="First name"
        type="text"
      />
      <InputFirstName
        onChange={onRegister}
        name="lastname"
        placeholder="Last name"
        type="text"
      />
      <InputPassword
        onChange={onRegister}
        name="password"
        placeholder="Create password"
        type="text"
      />
      <button onClick={onClick}>Register</button>
    </Blok>
  );
};

export default App;

// {
//   /* <div>
//   <h1>{value.address}</h1>;
//   <h3>{value.email}</h3>
//   <h3>{value.phone}</h3>
//   <hr/>
// </div> */
// }

// {
//   /* <h1>Hellp</h1> */
// }
// {
//   /* {!user.length && <h1>Loading...</h1>} */
// }
// {
//   /* {user.map((value) => { */
// }
// // return <div></div>;
// {
//   /* })} */
// }

// useEffect(() => {
// setTimeout(() => {
//   setUser(data);
// }, 3000);
// }, []);
//? fetch(URL, options)  Метод JavaScripta, нужен для вызова данных с Backenda
//? Без json() не возможно прочитать body "ReadableStream"
