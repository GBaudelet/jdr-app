# Projet perso

## Description

Réalisation d'un site pour créer des sheets de personnages pour des jeux de roles papier
Les sheets seront créer par les users
Une bibliothèques sera mise en place avec toutes les sheets(public)
Les sheets pourront être trier par tag

### Visuel du site

Les polices utilisés seront :

- pour les titres ????
- pour le reste du contenu ????

Le choix des couleurs sera :

- la couleur de fond: #f4f4f4;
- certaines actions et style (lien actif /survol..): #ff7f00;
- design fin pour les actions irréversibles (suppression etc..): #ff0000;
- fond du header et footer: #333;
- couleur de texte sur le fond header/footer: #fff;
- ...

le logo et le nom du site sont à créer

Mobile

-création de sheet possible? (à tester)
-> si oui menu burger latéral

Tablette

menu latéral a gauche et a droite pouvant être ouvert

Desktop

menu latéral toujours ouvert

### Action d'un user

Bob est un 'visiteur' du site
Il peut consulter la bibliothèque, les trier, les filtrer(tag)
Pour créer une sheet il devra avoir un compte

#### Scénario

Il cherche des idées de sheet de personnage pour sont propre jdr :
-soit il trouve une sheet déjà créer et il peut la télécharger sous différent format
-il souhaite la modifier pour correspondre a ça vision, il doit avoir un compte
-il souhaite créer une sheet depuis le début, il doit avoir un compte

## Technique

La stack utilisé est la `SERN` => SQL Express React Node

Communication technique type
L'user en arrivant sur le site(REACT) déclenchera une requete HTTP sur le serveur(EXPRESS) pour récupérer des données, le serveur ira chercher les données sur la BDD, ces données seront retournés au format JSON à l'user (client)

Mise en place:

- la base de donnée utilisée `SQL`, et son `SGBD` sera `MySQL`
  - voir schéma de conception de cette BDD plus bas.
- un serveur avec `Node`
  - les routes seront gérés avec `Express`
    - un système de session sera mis en place avec Express-session (gestion des cookies)
    - un module complémentaire pour gérer efficacement les sessions avec express-sql-session
    - on va devoir autoriser la communication entre notre serveur et le front en permettant les requêtes `CORS` (n'étant pas sur les mêmes origines (domaine ou PORT))
- le front avec `React`
  - routeur gérer par 'react-router-dom'
- le drag and drop avec 'react-Draggable'

### BACK

La Base de données :

Utilisation du Système de Gestion de Base de Données `MySQL`.
L'outil PhpMyAdmin est utilisé pour la création du Modèle Physique de Donnée `MPD`.

### Schéma

Un user peut avoir plusieurs role
Un user peut créer plusieurs sheets
Une sheet peut avoir plusieurs tag
Chaque role est unique

un user à :
-id unique
-un username
-email
-password
-créer le
-update le
-un role

Chaque sheets contient les info suivante :
-id unique
-un nom
-des tag(pour le tri)
-description
-date de création
-date de modification
-relié à un seul user

Chaque tag :
-id unique
-un nom

Chaque objet
-id unique
-type d'objet(list,texte, image...)
-position x de chaque l'objet placer
-position y de chaque l'objet placer
-content(si ya du text)
-cet objet là relié une seule sheet

#### Description de la relation entre les données.

- MCD

user -> role (1,N)
un user à un role
un user peut avoir plusieurs roles

role -> user (1,N)
un role peut être attribuer à un seul user
un role peut être attribuer à plusieurs user

user -> sheet (0,N)
un user peut avoir zero sheet
un user peut avoir plusieurs sheet

sheet -> user (1,1)
un sheet n'est lié que a un user

sheet -> objet (0,N)
un sheet ne contient pas d'objet
un sheet peut avoir plusieurs objet

objet -> sheet (0,N)
un objet peut être sur aucune sheet
un objet peut être sur plusieurs sheet

sheet -> tag (0,N)
un sheet peut avoir zero tag
un sheet peut avoir plusieurs tag

tag -> sheet (0,N)
un tag peut être attribuer à aucune sheet
un tag peut être attribuer à plusieurs sheet

- MLD

user/role -> relation (N,N)

user/sheet -> relation (1,N)

sheet/objet -> relation (N,N)

sheet/tag -> relation (N,N)

##### SERVEUR (API BACK)

Le serveur est en mode API.
L'architecture est Model/View/Controller `MVC`.
Les données seront transmises à la `View` au format JSON.

Modules à installer:

- express
- express-session
- express-mysql-session
- mysql2
- dotenv
- bcrypt
- cors

Structure Back :

```txt
API
|_src
|  |_config
|  |_controllers
|  |_middlewares
|  |_model
|_public
|_.env
```

Routes :

Il faut mettre en place les différentes routes, pour effectuer le CRUD sur les différentes données (tables) de la bdd.

Les routes (pas toutes) seront protégés par un middleware vérifiant si l'initiateur de la requête possèdent bien les droits (ici un admin).

> ROUTES

- `/API/V1` -> la route principale de l'API

###### FRONT (CLIENT)

page du front

- Main : page principal du site
- Bibliothèque : page regroupant toutes les fiches créer des utilisateurs avec options de tri et de recherche
- Profil
  -> panel admin
- Login/inscription
- Contact

`React` avec l'outil `ViteJS`

- react-router-dom
- sass
- redux/toolkit (ou API Context native)
- font-awesome
- react-Draggable pour le drag and drop
