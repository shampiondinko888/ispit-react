import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";

const App = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );

      setUserData(userResponse.data);
      setReposData(reposResponse.data);
      setError(null);
    } catch (error) {
      setUserData(null);
      setReposData(null);
      setError(
        error.message || "Došlo je do pogreške prilikom dohvata podataka."
      );
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "500px" }}>
      <h1 className="text-center">Dohvat korisnika s GitHuba</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>GitHub korisničko ime</Form.Label>
          <Form.Control
            type="text"
            placeholder="Unesite korisničko ime"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-3">
          {" "}
          {/* Dodajmo klasu za margin-bottom */}
          Potvrdi
        </Button>
      </Form>

      {error && <p className="text-danger mt-3">{error}</p>}

      {userData && (
        <div className="mt-3">
          <h2>Detalji korisnika</h2>
          <p>Ime: {userData.name}</p>
          <p>Broj repozitorija: {userData.public_repos}</p>
        </div>
      )}

      {reposData && (
        <div className="mt-3">
          <h2>Repozitoriji korisnika</h2>
          <ul>
            {reposData.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default App;
