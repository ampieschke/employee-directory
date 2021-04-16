import React, { useState } from "react";

export const Home = (props) => {
  const [name, setName] = useState("Drew");

  return (
    <>
      <h1>{JSON.stringify(name)} Was Here!</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
};
