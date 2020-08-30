import React, { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

export const ALL_PEOPLE = gql`
  query AllPeople {
    people {
      id
      name
    }
  }
`;

export const ALL_PEOPLE_TWO = gql`
  query AllPeople {
    people {
      id
      name
    }
  }
`;

export const ADD_PERSON = gql`
  mutation AddPerson($name: String) {
    addPerson(name: $name) {
      id
      name
    }
  }
`;

export default function App() {
  const { loading, data } = useQuery(ALL_PEOPLE);
  const [skip, setSkip] = useState(false);
  const query2 = useQuery(ALL_PEOPLE_TWO, { skip });

  return (
    <main>
      <h1>Apollo Client Issue Reproduction</h1>
      <p>
        This application can be used to demonstrate an error in Apollo Client.
      </p>
      <button data-testid="skip" onClick={() => setSkip(false)}>
        Add person
      </button>
      <h2>Names</h2>
      {loading ? (
        <p>Loading…</p>
      ) : (
        <ul>
          {data?.people.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
