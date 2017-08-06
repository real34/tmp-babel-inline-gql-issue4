import React from 'react';
import graphql from 'react-apollo/graphql';
import CharacterQuery from './CharacterQuery.gql';

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

export default graphql(CharacterQuery)(Character);
