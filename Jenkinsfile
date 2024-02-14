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

                    
                    
                        
                sh "sudo docker build -t priya-pro -f Dockerfile ."
                        
                    }
                }
            }
           
        
        stage('Docker Deploy to Container') {
            steps {
                script {
                 
                    sh "docker run -d --name priya-pro -p 8070:8070 priya-pro:latest" }
                }
                
            }
        }
    
}

