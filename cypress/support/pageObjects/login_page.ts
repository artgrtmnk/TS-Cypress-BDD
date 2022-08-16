/// <reference types="cypress" />
const elements = {
    userNameField: () => cy.get('#sso_username'),
    passwordField: () => cy.get('#ssopassword'),
    submitButton: () => cy.get('#signin_button'),
    errorMessage: () => cy.get('#errormsg'),

}

class LoginPage {
    static fillUserNameField(username: string) {
        elements.userNameField().type(username);
    }

    static fillPasswordField(password: string) {
        elements.passwordField().type(password);
    }

    static clickSubmitButton() {
        elements.submitButton().click({ force: true });
    }

    static login(username: string, password: string) {
        this.fillUserNameField(username);
        this.fillPasswordField(password);
        this.clickSubmitButton();
    }

    static checkErrorMessage(errorMsg: string) {
        elements.errorMessage().invoke('text').then((text: string) => {
            expect(text).to.include(errorMsg);
        })
    }
}
export default LoginPage;