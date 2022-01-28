# Demo express js - Bruxelles Interface 3
## Exercises
### Exos 1 - Le routage
Sur base des routes ci-dessous, créer les routeurs adaptés.  
  
    (AIDEZ VOUS DE MON GIT !!!!!!!)
  
    localhost:3000/api/users/               -->GET all users (récupérer tout les users)
    localhost:3000/api/users/:id            -->GET one user by id (récupérer un user)
    localhost:3000/api/users/               -->POST one user (ajouter un user)
    localhost:3000/api/users/:id            -->PUT one user (modifir un user)
    localhost:3000/api/users/:id            -->DELETE one user(supprimer un user)


    localhost:3000/api/products/            --> get all
    localhost:3000/api/products/:id         --> get one by id
    localhost:3000/api/products/            --> post product
    localhost:3000/api/products/:id         --> put / patch product
    localhost:3000/api/products/:id         --> delete one product


    localhost:3000/api/categories/          --> get all
    localhost:3000/api/categories/:idProd   --> get one by id
    localhost:3000/api/categories/          --> post categories
    localhost:3000/api/categories/:idProd   --> put / patch categories on product
    localhost:3000/api/categories/:idProd   --> delete one categories on product

  
En plus de cela, il vous faudra créer également un routeur, que vous nommerez other.route.js  
qui contiendra -> la route d'accueil de votre APIRest  
Un autre routeur pour la page de contact (get, post).  
Un autre routeur pour les routes de connexion (login, logout, subscribe)  


