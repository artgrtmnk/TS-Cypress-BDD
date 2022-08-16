import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import GraphqlClient from '../../support/apiClients/gql_client';
import { UserGenerator, User } from '../../support/apiHelpers/user_class';

/// <reference types="cypress" />

describe('GraphQL Api Suite', () => {
    let reqResponse: Cypress.Response<any>;
    let user: User = UserGenerator.GenerateUser();

    Given('GQL I set up a basic url as {string}', (url: string) => {
        Cypress.config('baseUrl', url)
    });

    When('I send a GQL request with body', (query: string) => {
        GraphqlClient.sendGqlRequest(query, user)
                .then((response) => reqResponse = response)
    });

    Then('GQL Response code is {int}', (code: number) => {
        expect(reqResponse.status).to.eq(code, "Response code is correct.");
    })

    Then('GQL Response contains {string}', (expectedString: string) => {
        expect(JSON.stringify(reqResponse.body)).contains(expectedString, "Response body contains correct data.")
    })

    Then('GQL Response does not contains {string}', (unExpectedString: string) => {
        expect(JSON.stringify(reqResponse.body)).does.not.contains(unExpectedString, "Response body contains correct data.")
    })

    Then('GQL Response contains correct user info', () => {
        const reqUser: User = reqResponse.body.data.user
        expect(Cypress._.isEqual(user, reqUser)).to.be.true
    })

    Then('GQL I save user id', () => {
        user.id = reqResponse.body.data.createUser.user.id;
    })
})