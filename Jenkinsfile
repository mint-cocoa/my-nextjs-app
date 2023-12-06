pipeline {
  agent {
    node {
      label 'agent1'
    }

  }
  stages {
    stage('sorce') {
      steps {
        git(credentialsId: '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', branch: 'master', url: 'https://github.com/mint-cocoa/my-nextjs-app')
      }
    }

    stage('build') {
      steps {
        tool 'gradle'
      }
    }

    stage('deploy') {
      steps {
        sh 'echo "deploy sucess"'
      }
    }

  }
}