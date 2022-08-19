pipeline {
    agent any
    tools {nodejs "node17_0_0"}
    stages {
        stage ('Passing token') {
            steps {
                script{
                    def jsonFileString = readFile file: "${WORKSPACE}/cypress/fixtures/token.json"
                    jsonFileString = jsonFileString.replaceAll("YOUR_TOKEN", params.token)
                    writeFile file: "${WORKSPACE}/token.json", text: jsonFileString
                }
            }
        }
        stage ('Dependencies Installation Stage') {
            steps {
                sh 'npm i'
            }
        }
        stage ('Testing Stage') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'allure generate --clean --output allure-results && npx cypress run --env allure=true'
                }
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