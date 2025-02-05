// Jenkinsfile
pipeline {
    agent any

    environment {
        // Define environment variables
        DOCKER_REGISTRY = 'docker.io/vathanaksol'
        APP_NAME = 'my-portfolio'
        DOCKER_CREDENTIALS = credentials('naktech')
    }

    stages {
	stage('Set Image Tag') {
            steps {
                script {
                    // Compute the IMAGE_TAG from the Git commit hash.
                    env.IMAGE_TAG = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                }
            }
        }

        stage('Checkout') {
            steps {
                // Clean workspace and checkout code
                cleanWs()
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh """
                        docker build -t ${DOCKER_REGISTRY}/${APP_NAME}:${IMAGE_TAG} .
                        docker tag ${DOCKER_REGISTRY}/${APP_NAME}:${IMAGE_TAG} ${DOCKER_REGISTRY}/${APP_NAME}:latest
                    """
                }
            }
        }

        stage('Push to Registry') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'naktech', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        // Login to Docker registry
                        sh """
                            echo \$DOCKER_PASSWORD | docker login docker.io -u \$DOCKER_USERNAME --password-stdin
                        """
                        
                        // Push Docker image
                        sh """
                            docker push ${DOCKER_REGISTRY}/${APP_NAME}:${IMAGE_TAG}
                            docker push ${DOCKER_REGISTRY}/${APP_NAME}:latest
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up
            sh """
                docker rmi ${DOCKER_REGISTRY}/${APP_NAME}:${IMAGE_TAG} || true
                docker rmi ${DOCKER_REGISTRY}/${APP_NAME}:latest || true
                docker logout ${DOCKER_REGISTRY} || true
            """
        }
        success {
            echo "Successfully built and pushed Docker image ${DOCKER_REGISTRY}/${APP_NAME}:${IMAGE_TAG}"
        }
        failure {
            echo "Failed to build/push Docker image"
        }
    }
}
