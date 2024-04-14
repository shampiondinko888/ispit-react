import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Broj repozitorija: {user.public_repos}</p>
      <h3>Repozitoriji:</h3>
      <ul>
        {user.repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
