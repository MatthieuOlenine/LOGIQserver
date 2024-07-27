# LOGIQserver

gestionnaire JSON d'une DB clients, DB produits et DB client entreprise.

1. [Description]

Chaques clients est enregistré avec les informations suivantes : 
    address         :   suite de caractère hexadécimale, généré depuis 'mail', servant d'identification
    password        :   mot de passe renseigné par l'utilisateur (doit IMPÉRATIVEMENT être haché avant d'étre stocké)
    firstname       :   prénom de l'utilisateur
    lastname        :   nom de famille de l'utilisateur
    birth           :   date de naissance de l'utilisateur
    mail            :   email de l'utilisateur
    num             :   numéro téléphonique de l'utilisateur
    creationdate    :   horodatage de création du compte de l'utilisateur (généré automatiquement)
    lastco          :   horodatage de la dernière connection de l'utilisateur (dois être modifié dès que l'utilisateur se connecte au site)
    historic        :   historique des commandes de l'utilisateur, liste de collections
    
Chaques produits est enregistré avec les informations suivantes : 
    sku             :   suite de caractère hexadécimale, généré depuis 'product', servant d'identification
    product         :   nom du produit
    description     :   description du 
    price           :   prix du produit
    img             :   liste d'images (format .jpg requis)
    nbcmd           :   nombre de fois où le produit à été commandé par un client ou une entreprise cliente, incrémentation automatique
    disp            :   disponibilité du produit, initialisé sur 'true' pour disponible, et 'false' pour indisponible

Chaques entreprises clients est enregistré avec les informations suivantes : 
    address         :   suite de caractère hexadécimale, généré depuis 'mail', servant d'identification
    password        :   mot de passe renseigné par l'utilisateur (doit IMPÉRATIVEMENT être haché avant d'étre stocké)
    title           :   nom de l'entreprise
    mail            :   email de l'entreprise
    num             :   numéro téléphonique de l'entreprise
    siret           :   numéro siret de l'entreprise client
    creationdate    :   horodatage de création du compte de l'entreprise (généré automatiquement)
    lastco          :   horodatage de la dernière connection de l'entreprise (dois être modifié dès que l'entreprise se connecte au site)
    historic        :   historique des commandes de l'entreprise, liste de collections

lorsqu'un produit bascule dans l'historique d'un client ou d'une entreprise cliente il gagne 2 autres parametres :
    state           :   'initialisé sur 'com' pour commandé, peut être modifié par la suite pour afficher 'livré', ou 'expédié' par exemple
    date            :   horodatage de la prise de la commande

2. [Installation]

    '''bash
    
git clone https://github.com/MatthieuOlenine/LOGIQserver.git    cloner le projet sur votre machine

cd LOGIQserver                                                  déplacer vous dans le projet

npm install                                                     installez les dépendances nécessaires à l'utilisation (node.js)

node app.js                                                     éxécutez le projet

3. [Usage]

stockez les données de vos clients, de vos entreprises clientes et de vos produits en vente. en local ou sur un droplet.
Les clients, les entreprises clientes et les produits en ventes sont stockés dans 3 fichiers JSON distincts.
Les clients et les entreprises clientes viennent piocher dans le fichier des produits en vente pour générer leur historique.

4. [Fonctionnalités]

possibilité d'ajouter un client, une entreprise cliente, un produit en vente.
possibilité de modifier un client, une entreprise cliente, un produit en vente.
possibilité de supprimer un client, une entreprise cliente, un produit en vente.
possibilité de lire un client, une entreprise cliente, un produit en vente.
possibilité d'ajouter un produit dans l'historique d'un client ou d'une entreprise cliente.
possibilité de modifier 'state' d'un produit dans l'historique d'un client ou d'une entreprise cliente.
possibilité de supprimer un produit dans l'historique d'un client ou d'une entreprise cliente.
possibilité de lire un produit dans l'historique d'un client ou d'une entreprise cliente.

5. [Configuration]

Node.js version 22.5.1 requise.

6. [Contribuer]

contactez moi via ce mail ↓
matthieuolenine@gmail.com

7. [Tests]

testez le gestionnaire via les annotations dans le fichier 'app.js'.

## LOGIQ

Ce projet est utilisé par l'entreprise LOGIQ.

Matthieu Olenine

