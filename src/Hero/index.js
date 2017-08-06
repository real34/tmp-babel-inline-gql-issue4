import React from 'react';
import graphql from 'react-apollo/graphql';
import HeroQuery from './HeroQuery.gql';

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

export default graphql(HeroQuery)(Hero);
