import { User } from '../apiHelpers/user_class'
import { DefaultDataValidator } from '../apiHelpers/default_data_validator';

/// <reference types="cypress" />

class GraphqlClient {
    static sendGqlRequest = (query: string, user: User) => {
        query = DefaultDataValidator.checkDefaultData(query, user)
        return cy.request({
            method: 'POST',
            body: {query}
        })
    }
}
export default GraphqlClient;