Sur Windows,mac ou linux:
1) installer node si besoin et verif via node --version et npm --version
2) npm install -g cypress et npm install -g http-server
3) dans répertoire du projet:
   npx cypress open pour générer si besoin quelques répertoires cypress
   ecrire si besoin fichier cypress/e2e/xxx.spec.cy.js
---------------
3) dans répertoire du projet:
   http-server -p 3000 .
   npx cypress open 
     et choix navigateur/e2e/ test à lancer
   