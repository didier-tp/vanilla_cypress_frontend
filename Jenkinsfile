pipeline {
    agent {
        docker {
		 image 'node_ts_cypress' 
		}
    }
	environment{
	     //NB: credential_dockerhub_didierdefrance69 is ID of credential
		//prepared in "Admin Jenkins / Credentials / system /global"
		dockerhub_credential_id='credential_dockerhub_didierdefrance69'
		
		//dockerRegistry is dockerhub
		docker_registry= 'https://registry.hub.docker.com'
       docker_image_name='didierdefrance69/appli_javascript:2'
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
	stage('build_docker_image') {
	     steps {
		     script{ 
			      echo 'equivalent de docker build -t m2i/appli_javascript:1 . '
			      dockerImage = docker.build(docker_image_name)
				  }
			   } 
		}
	stage('push_docker_image') {
            steps {
			  script{
					echo "docker_registry=" + docker_registry
					echo "dockerhub_credential_id=" +dockerhub_credential_id
					//docker.withRegistry( docker_registry, dockerhub_credential_id ) { 
					//   dockerImage.push() 
					//	 }
					  }
				  }
		}
    }
}