(function() {
  'use strict';

  app.i18n.registerFR = function() {
    app.i18n.register('fr', {
    landingPage: {
      title: '%{content} de la page initiale',
      distance: 'distance',
      mm: {
        counter: 'distance',
        1: '1 millimètre',
        n: '%{distance} millimètres'
      }
    },
    register: {
      username: 'Identifiant',
      password: 'Mot de passe',
      email: 'Adresse email',
      submitButton: 'Créer utilisateur',
      messages: {
        usernameMissing: 'L\'identifiant est requis',
        passwordMissing: 'Le mot de passe est requis',
        userAdded: 'L\'utilisateur a été créé avec succès!',
        userNotAdded:  'Une erreur s\'est produite lors de la création de l\'utilisateur'
      }
    },
    loginForm: {
      greetings: 'Bonjour %{username}!',
      newUserLink: 'Créer un utilisateur',
      username: 'Identifiant',
      password: 'Mot de passe',
      login: 'Se connecter',
      logout: 'Se déconnecter',
      messages: {
        usernameMissing: 'L\'identifiant est requis',
        passwordMissing: 'Le mot de passe est requis',
        loginFailed: 'Mauvais identifiant ou mot de passe.',
        logoutFailed: 'Une erreur s\'est produite pendant la déconnection'
      }
    }
  });
  };
})();
