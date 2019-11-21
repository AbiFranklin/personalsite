import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag'



function Blog() {
    let token = 'ad15770e64d6dd41a14c592f167238'

    let httpLink = createHttpLink({
        uri: 'https://graphql.datocms.com/' 
    });

    let authLink = setContext((__, { headers }) => {
        return {
            headers: Object.assign(
                headers || {},
                {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            )
        }
    });

    let client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });

    let posts = []

    client.query({ query: gql`{
        allWorks {
        id
        title
        description
        }
    }` })
    .then ((res) => {
        res.data.map((post) => posts.push(post))
    })
    .catch((err) => {
        console.log(err)
    })
    
    console.log(posts)

    return (
        <div>
            <h2>blog</h2>
        </div>
      )
  }



  export default Blog