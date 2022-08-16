import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import RestClient from '../../support/apiClients/rest_client';
import { UserGenerator, User } from '../../support/apiHelpers/user_class';

/// <reference types="cypress" />

describe('Rest Api Suite', () => {
    let reqResponse: Cypress.Response<any>;
    let user: User = UserGenerator.GenerateUser();

    Given('I set up a basic url as {string}', (url: string) => {
        Cypress.config('baseUrl', url)
    });

    When('I send a Get user list request', () => {
        RestClient.getUserList()
                .then((response) => reqResponse = response)
    });

    When('I send a Post create user request', () => {
        RestClient.createUser(user)
                .then((response) => reqResponse = response)
    });

    When('I send a Get created user request', () => {
        RestClient.getUser(user.id)
                .then((response) => reqResponse = response)
    });

    When('I send a Patch user request with body', (docString: string) => {
        RestClient.patchUser(docString, user.id)
                .then((response) => reqResponse = response)
    });

    When('I send a Delete user request', () => {
        RestClient.deleteUser(user.id)
                .then((response) => reqResponse = response)
    });

    Then('Response code is {int}', (code: number) => {
        expect(reqResponse.status).to.eq(code, "Response body contains correct data.");
    })

    Then('Response contains {string}', (expectedString: string) => {
        for (const prop in reqResponse.body) {
            if (prop.includes(expectedString))
                expect(reqResponse.body).contains(expectedString, "Response body contains correct data.")
          }
    })

    Then('Response body contains correct user info', () => {
        const reqUser: User = reqResponse.body
        expect(Cypress._.isEqual(user, reqUser)).to.be.true
    })

    Then('I save user id', () => {
        user.id = reqResponse.body.id;
    })
})