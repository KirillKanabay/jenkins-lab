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
    
    post {
        always {
            echo 'Сборка завершена.'
        }
        success {
            echo 'Успех! Можно деплоить.'
        }
        failure {
            echo 'Внимание! Сборка упала, проверьте код.'
        }
    }
}