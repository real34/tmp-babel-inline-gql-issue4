import React from 'react';
import graphql from 'react-apollo/graphql';
import FooQuery from './FooQuery.gql';

const Unused = () => {
  return <div>I wish I'd be used at some point</div>;
};

export default graphql(FooQuery)(Unused);
