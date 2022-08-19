pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage ('Passing token') {
            steps {
                script{
                    def jsonFileString = readFile file: "${WORKSPACE}/cypress/fixtures/token.json"
                    jsonFileString = jsonFileString.replaceAll("YOUR_TOKEN", params.token)
                    writeFile file: "${WORKSPACE}/cypress/fixtures/token.json", text: jsonFileString
                }
            }
        }
        stage ('Dependencies Installation Stage') {
            steps {
                sh 'npm i'
                sh 'npm install -g allure-commandline --save-dev'
            }
        }
        stage ('Testing Stage') {
            steps {
                sh 'allure generate --clean --output allure-results && npx cypress run --env allure=true'
            }
        }
        stage ('Allure report Stage') {
            steps {
                allure includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
            }
        }
    }
}