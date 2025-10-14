import React, { useEffect, useState } from "react";
import UserPresenter from "./UserPresenter";

export default function UserContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => setUser({ name: "Hyun Joo", age: 30 }), 500);
  }, []);

  return <UserPresenter user={user} />;
}
