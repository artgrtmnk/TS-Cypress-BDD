# TS-Cypress-BDD

### About
**Overview:** _TypeScript UI and API with BDD testing framework sample._

**Systems under test:**
- UI: Oracle login application.
- API: Gorest.co.in Rest and GraphQL application.

**Technology stack:**
- Basic: TypeScript, Cypress
- BDD: Cucumber
- UI: Cypress
- API: Cypress
- Reporting: Allure

### Installation
1. Install [Node.js](https://nodejs.org/en/).
2. Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
3. Download the project.
4. Install dependencies with a terminal command `yarn install` or `npm install` in the project's root folder.
5. Get your token for [GoRest](https://gorest.co.in/my-account/access-tokens) (You need to register/login first).
6. In `projects_root_folder/cypress/fixtures` folder paste your token into `token.json` file as a value for the `token` key.
7. Additional step: You need to install [Allure](https://github.com/allure-framework/allure2), if you want to use it.

### Running tests
1. You can use Cypress GUI with `yarn cy:ui` command.
2. As well, you can start test suite with `yarn cy:headless` command.
3. Also, you can start the suite and generate Allure report with `yarn cy:allure` and after it, open it with `yarn allure:open`.
4. And the most prefered options is to use `yarn cy:allure:open` command, that would execute the suite, generate and open the report as an HTML doc.

### After test
- Framework creates allure reports, that located in `allure-results` folder.
- Check the `Running tests` section to get more info about working with Allure reports.
- **Note: Allure folder would be cleared within the next test run.**

### Post scriptum
**_Antipattern was used in this sample framework: Test scenarios from API feature files are running sequentially, just because that's a sample. Never do it in a real project. Each test scenario should be independent and all of the pre-conditions should be done within the Given steps!_**
