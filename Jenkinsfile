pipeline {
    agent {
        docker {
		 image 'node_ts_cypress' 
		}
    }
	environment{
       docker_image_name='m2i/appli_javascript:1'
    }
    stages {
     //stage('from_git') { 
     //  steps { git url : 'https://github.com/didier-tp/vanilla_cypress_frontend' , branch : 'main' 
     //} 
     //}
    stage('npm_install') { 
      steps {
       sh 'npm install -g jest' 
     } 
    }
      stage('Test') {
            steps {
                echo 'lancement de tests unitaires (ex: jest): '
                sh 'npm run test'

		echo 'lancement de test e2e (ex cypress) avec script "ic" préparé dans package.json ' 
                sh 'npm run ic'
            }
        }
    }
}