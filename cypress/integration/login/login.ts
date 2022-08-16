import LoginPage from '../../support/pageObjects/login_page';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

/// <reference types="cypress" />

describe('Test suite', () => {
    Given('User has opened Oracle Profile page', () => {
        Cypress.config('baseUrl', 'https://profile.oracle.com')
        cy.visit('/')
    });

    When('User inputs {string} as email', (email: string) => {
        LoginPage.fillUserNameField(email);
    });

    When('User inputs {string} as password', (password: string) => {
        LoginPage.fillPasswordField(password);
    });

    When('User presses Sign In button', () => {
        LoginPage.clickSubmitButton();
    })

    Then('User sees invalid credentials message', () => {
        LoginPage.checkErrorMessage('Invalid username and/or password.');
    })
})
