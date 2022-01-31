#!/usr/bin/env groovy
def gv

pipeline {
    agent any

    stages {
        stage('Init') {
            steps {
                script {
                    gv = load './script.groovy'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    gv.buildApp()
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            input {
                message "Select the env"
                ok "env selected"
                parameters {
                    choice(name:'ENV', choices: ['dev', 'staging', 'prod'], description: '')
                }
            }
            steps {
                echo "Deploying in ${ENV}"
            }
        }
    }
}
// \\\${}