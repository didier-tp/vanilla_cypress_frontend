pipeline {
    //agent any
    //agent { label 'node' }
    agent { label '! without-node' }
    stages {
	    //stage('from_git') {
        //    steps {
        //          git url : 'https://github.com/didier-tp/vanilla_cypress_frontend' , branch : 'main'
        //    }
        //}
        stage('npm_install') {
            steps {
				echo 'npm install'
				sh 'npm install'
            }
        }
		stage('tests') {
            steps {
				echo 'run ic script of package.json (start-server-and-test(http-server,3000,cypress))'
				sh 'npm run ic'
            }
        }
    }
}
