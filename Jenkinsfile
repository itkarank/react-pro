pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/itkarank/react-pro'
            }
        }

       stage('Docker Build & Push') {
            steps {
                script{

                    
                    withDockerRegistry(credentialsId: '4dc60544-f54b-48cd-ad44-bd685badc389', toolName: 'priya-pro') {
                        
                        sh "docker build -t priya-pro -f Dockerfile ."
                        sh "docker tag  priya-pro karan143/priya-pro:version1"
                        sh "docker push karan143/priya-pro:version1"
                    }
                }
            }
        }    
        
        stage('Docker Deploy to Container') {
            steps {
                script {
                withDockerRegistry(credentialsId: '4dc60544-f54b-48cd-ad44-bd685badc389', toolName: 'priya-pro') {
                    sh "docker run -d --name priya-pro -p 8070:8070 karan143/priya-pro:version1" }
                }
                
            }
        }
    }
}
