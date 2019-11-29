import React from "react";
import UserState from "./context/user/UserState";
import Input from "./component/Input";

const App = () => {
  return (
    <UserState>
      <Input />
    </UserState>
  );
};

export default App;
