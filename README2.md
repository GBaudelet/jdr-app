# FICHE DE PERSO

## OBJECTIF

- permettre aux utilisateurs de créer, personnaliser, modifier, enregistrer et imprimer des fiches de personnage
- Fonctionnalité :
  drag and drop
  création de fiche

  gestion des utilisateur/login

- technologie :
  express
  mysql2
  dotenv
  bcrypt.js
  nodemon
  react

### CONCEPTION

-5 pages principal

<!-- --> main:

->page de base du site avec des info concernant le site/app
->accès possible pour tous le monde

<!--  -->

<!--  --> Contact

->formulaire de contact

<!--  -->

<!-- --> profile:

->accès réserver au utilisateur
->gestion des fiches individuel
->choix des fiche en privé ou public
->panel admin dispo pour l'admin uniquement
->gestion admin

<!--  -->

<!-- --> bibliothèque:

->visible par tous le monde
->utilisation comme modèle modifiable uniquement pour les utilisateurs
->possible de chercher des fiches par nom,type de jdr(custom,origin),nom de jdr(tag)

<!--  -->

<!-- --> création de la fiche:

->accès réservé aux utilisateur

<!--  -->

<!--  --> autre page

->cgu...

#### BDD

-TABLE user
id
username
email
password
created_at
updated_at
role_id

-TABLE roles
id
role_name

-TABLE sheet
id
title
description
type
created_at
update_at
user_id

-TABLE tags
id
name

-TABLE sheet_tags
sheet_id
tag_id

-TABLE blocs <!-- lui trouver un autre nom -->
id
bloc_type
position_x
position_y
content
sheet_id

-TABLE bloc_url
id
url
bloc_id
