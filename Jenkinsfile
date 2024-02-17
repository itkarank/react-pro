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

                    
                    withDockerRegistry(credentialsId: '326be1ad-e1ba-4726-8ca1-da56c0cc8524', toolName: 'priya-pro') {
                        
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
                withDockerRegistry(credentialsId: '326be1ad-e1ba-4726-8ca1-da56c0cc8524', toolName: 'priya-pro') {
                    sh "docker run -d --name priya-pro -p 3000:3000 karan143/priya-pro:version1" }
                }
                
            }
        }
    }
}
