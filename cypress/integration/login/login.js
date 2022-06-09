import loginPage from '../../support/pageObjects/login_page';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

/// <reference types="cypress" />

describe('Test suite', () => {
    Given('User has opened Oracle Profile page', () => {
        cy.visit('/')
    });

    When('User inputs {email} as email', (email) => {
        loginPage.fillUserNameField(email);
    });

    When('User inputs {password} as password', (password) => {
        loginPage.fillPasswordField(password);
    });

    When('And User presses Sign In button', () => {
        loginPage.clickSubmitButton();
    })

    Then('User sees invalid credentials message', () => {
        loginPage.checkErrorMessage('Invalid username and/or password.');
    })
})
