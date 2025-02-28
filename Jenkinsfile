pipeline {
    agent any
    stages {
	    stage('from_git') {
            steps {
                  git url : 'https://github.com/didier-tp/vanilla_cypress_frontend' , branch : 'main'
            }
        }
        stage('npm_install') {
            steps {
				echo 'npm install'
				sh 'npm install'
            }
        }
		stage('tests') {
            steps {
			    sh 'npm install -g lite-server'
			    sh 'lite-server'
				echo 'e2e cypress tests'
				sh 'npx cypress run --spec "cypress/e2e/myTest.spec.cy.js" > test_report.txt'
            }
        }
    }
}
