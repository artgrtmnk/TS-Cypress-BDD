/// <reference types="cypress" />
const elements = {
    userNameField: () => cy.get('input[id="sso_username"]'),
    passwordField: () => cy.get('input[id="ssopassword"]'),
    submitButton: () => cy.get('input[id="signin_button"]'),
    errorMessage: () => cy.get('span[id="errormsg"]'),

}

class LoginPage {
    static fillUserNameField(username) {
        elements.userNameField().type(username);
    }

    static fillPasswordField(password) {
        elements.passwordField().type(password);
    }

    static clickSubmitButton() {
        elements.submitButton().click({ force: true });
    }

    static login(username, password) {
        this.fillUserNameField(username);
        this.fillPasswordField(password);
        this.clickSubmitButton();
    }

    static checkErrorMessage(errorMsg) {
        elements.errorMessage().invoke('text').then((text) => {
            expect(text).to.include(errorMsg);
        })
    }
}
export default LoginPage;