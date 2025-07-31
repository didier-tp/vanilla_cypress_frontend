frontend élémentaire en HTML/CSS/vanilla_js
avec test cypress
pour essai élémentaire d'intégration continue avec Jenkins ou bien gitlab-ci
----------
première version: avec "devDependencies": {    "cypress": "^14.1.0"  } dans package.json
seconde version: après quelques installations globales:
   npm install -g cypress 
   npm install -g http-server
   npm install -g start-server-and-test
-----
"scripts": {
	"ic" : "start-server-and-test 'http-server -p 3000 --silent' 3000 'cypress run --spec ./cypress/e2e/myTest.spec.cy.js --reporter json --reporter-options output=test-report.json'"
  },
----
NB: * npx cypress only if cypress install as a local dev-dependency
    * start-server-and-test va démarrer un serveur , attendre que celui ci démarre , lance les tests puis arrête le serveur
    ce qui est très pratique pour de l'intégration continue
documentation: https://www.npmjs.com/package/start-server-and-test

***