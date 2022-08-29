import React, { memo, useEffect, useState } from "react";
import { data } from "./Mok";
import { Blok } from "./style";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // setTimeout(() => {
    //   setUser(data);
    // }, 3000);

    //? fetch(URL, options)  Метод JavaScripta, нужен для вызова данных с Backenda
    //? Без json() не возможно прочитать body "ReadableStream"

    fetch("https://houzing-app.herokuapp.com/api/v1/houses/list").then((jek) =>
      jek.json().then((jek) => setUser(jek.data))
    );
  }, []);
  return (
    <Blok>
      <h1>Hellp</h1>
      {!user.length && <h1>Loading...</h1>}
      {user.map((value) => {
        return (
          <div>
            <h1>{value.address}</h1>;
            <h3>{value.email}</h3>
            <h3>{value.phone}</h3>
            <hr/>
          </div>
        );
      })}
    </Blok>
  );
};

export default memo(App);
