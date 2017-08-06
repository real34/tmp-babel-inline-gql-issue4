import React from 'react';
import { gql, graphql } from 'react-apollo';

const Character = ({ data: { loading, character } }) => {
  if (loading) {
    return <div>Fetching data...</div>;
  }

  return (
    <div>
      <h3>
        Details of {character.name}
      </h3>

      <p>
        Appears in: {character.appearsIn.join(', ')}
      </p>
    </div>
  );
};

const CharacterQuery = gql`
  query CharacterQuery($id: ID!) {
    character(id: $id) {
      id
      name
      appearsIn
    }
  }
`;

export default graphql(CharacterQuery)(Character);
