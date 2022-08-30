import React, { useState } from "react";
import {
  Blok,
  Button,
  H1,
  Input,
  InputEmail,
  InputFirstName,
  InputLastName,
  InputName,
  InputPassword,
} from "./style";

const App = () => {
  const [state, setState] = useState({ roleIdSet: [1] });

  const onClick = () => {
    fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
  };

  const onRegister = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <Blok>
      <H1>
        <h1>Sign up for a free account</h1>
      </H1>

      <Input>
        <InputFirstName
          onChange={onRegister}
          name="firstname"
          placeholder="First name"
          type="text"
        />
        <InputLastName
          onChange={onRegister}
          name="lastname"
          placeholder="Last name"
          type="text"
        />
      </Input>
      <InputName>
        <InputEmail
          onChange={onRegister}
          name="email"
          placeholder="Email address"
          type="text"
        />
        <InputPassword
          onChange={onRegister}
          name="password"
          placeholder="Create password"
          type="text"
        />
        <Button onClick={onClick}>Register</Button>
      </InputName>
    </Blok>
  );
};

export default App;

