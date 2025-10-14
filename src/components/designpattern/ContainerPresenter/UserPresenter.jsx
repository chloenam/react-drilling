import React from "react";

export default function UserView({ user }) {
  return (
    <div className="box__pattern">
      <h3>Container–Presenter Pattern</h3>
      {user ? (
        <p>
          {user.name} ({user.age})
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
