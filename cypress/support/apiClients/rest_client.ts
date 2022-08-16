import { User } from '../apiHelpers/user_class'

/// <reference types="cypress" />

class RestClient {
    static getUserList = () => {
        return cy.request({
            method: 'GET'
        })
    }

    static createUser = (user: User) => {
        return cy.request({
            method: 'POST',
            body: user
        })
    }

    static getUser = (id: number) => {
        Cypress.config('baseUrl', Cypress.config('baseUrl') + id)
        return cy.request({
            method: 'GET',
            failOnStatusCode: false
        })
    }

    static patchUser = (docString: string, id: number) => {
        Cypress.config('baseUrl', Cypress.config('baseUrl') + id)
        return cy.request({
            method: 'PATCH',
            body: {docString}
        })
    }

    static deleteUser = (id: number) => {
        Cypress.config('baseUrl', Cypress.config('baseUrl') + id)
        return cy.request({
            method: 'DELETE'
        })
    }
    
}
export default RestClient;