@api
@gql
Feature: GoRest GraphQL API

  Background:
    Given GQL I set up a basic url as 'https://gorest.co.in/public/v2/graphql'

  Scenario: 1: Get user list using GraphQL
    When I send a GQL request with body
      """
      {
        "query":
            "query  {
                users {
                    pageInfo {
                        endCursor 
                        startCursor 
                        hasNextPage 
                        hasPreviousPage
                    } 
                    totalCount nodes {
                        id 
                        name 
                        email 
                        gender 
                        status
                    }
                }
            }"
        }
      """
    Then GQL Response code is 200
    But GQL Response does not contains '"errors"'

  Scenario: 2: Create a new user using GraphQL
    When I send a GQL request with body
      """
        {
            "query":
                "mutation{
                    createUser(input: {
                        name: \"Default User\" 
                        gender: \"female\" 
                        email: \"default_email@gmail.com\" 
                        status: \"active\"
                    }) 
                    {
                        user {
                            id 
                            name 
                            gender 
                            email 
                            status
                        }
                    }
                }"
        }
      """
    Then GQL Response code is 200
    And GQL Response contains '"id"'
    But GQL Response does not contains '"errors"'
    And GQL I save user id

  Scenario: 3: Get created user data using GraphQL
    When I send a GQL request with body
      """
        {
            "query":
                "query{
                    user(id: 99999) { 
                        id 
                        name 
                        email 
                        gender 
                        status 
                    }
                }"
        }
      """
    Then GQL Response code is 200
    And GQL Response contains correct user info
    But GQL Response does not contains '"errors"'
    
  Scenario: 4: Change created user details using GraphQL
    When I send a GQL request with body
      """
        {
            "query":
                "mutation{
                    updateUser(input: {
                            id: 99999 
                            name: \"Donald Duck\"
                    }) 
                    {
                        user {
                            id 
                            name 
                            gender 
                            email 
                            status
                        }
                    }
                }"
        }
      """
    Then GQL Response code is 200
    And GQL Response contains '"name":"Donald Duck"'
    But GQL Response does not contains '"errors"'

  Scenario: 5: Delete created user using GraphQL
    When I send a GQL request with body
      """
        {
            "query":
                "mutation{
                    deleteUser(input: {
                        id: 99999
                    }) 
                    {
                        user {
                            id 
                            name 
                            gender 
                            email 
                            status
                        }
                    }
                }"
        }
      """
    Then GQL Response code is 200
    And GQL Response contains '"id"'
    But GQL Response does not contains '"errors"'

  Scenario: 6: Get deleted user data using GraphQL
    When I send a GQL request with body
      """
        {
            "query":
                "query{
                    user(id: 99999) { 
                        id 
                        name 
                        email 
                        gender 
                        status 
                    }
                }"
        }
      """
    Then GQL Response code is 200
    And GQL Response contains '"user":null'
    But GQL Response does not contains '"name":"Donald Duck"'