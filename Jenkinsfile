pipeline {
    agent any // Использовать любой доступный агент

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Установка зависимостей...'
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                echo 'Запуск тестов...'
                sh 'npm test'
            }
        }
    }
}