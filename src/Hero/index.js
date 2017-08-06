import React from 'react';
import { gql, graphql } from 'react-apollo';

const Hero = ({ data: { loading, hero }, displayCharacter }) => {
  if (loading) {
    return <div>Fetching data...</div>;
  }

  return (
    <div>
      <h2>{hero.name}</h2>
      His friends are:
      <ul>
        {hero.friends.map(friend =>
          <li key={friend.id}>
            <button onClick={() => displayCharacter(friend.id)}>
              {friend.name}
            </button>
            appearing in {friend.appearsIn.join(', ')}
          </li>
        )}
      </ul>
    </div>
  );
};

const HeroQuery = gql`
  {
    hero {
      name
      friends {
        id
        name
        appearsIn
      }
    }
  }
`;

export default graphql(HeroQuery)(Hero);
