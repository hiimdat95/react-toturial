import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const allUserQuery = gql`
{
    allUsers{
        id
        email
    }
}`;

export const Home = () => (
  <Query query={allUserQuery}>
    {({ data: { allUsers = [] } }) => (
      allUsers.map(u => (
        <h1 key={u.id}>
          {u.email}
          {' '}
        </h1>
      ))
    )
    }
  </Query>
);


export default Home;
