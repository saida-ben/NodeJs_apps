# Introduction à Node.js
Dans ce projet, nous allons introduire [Node.js](http://node.js.org) ainsi que la notion de module ***module*** l'ensemble des 
paramètres de celui-ci est les différents objets globaux.

> Ce fichier est écrit avec la syntaxe `Markdown` qui est langage de balisage simple. Pour visualiser le fichier, on utilise `Ctrl + Shift +v` .

## Définition 
`Node.js` est Environnement d'Exécution JavaScript coté serveur.

## Exécution 
Pour exécuter un script .js sous exp01.js, on tilise la commande suivante :
 ```
    > node exp01 
  ```

## Objets Globaux
Certains objets globaux n'ayant pas de rapport avec un environnement coté serveur n'ont pas d'existance sous `Node.js` :
1. window
1. document 

En contrepartie, l'equivalent de l'objet global window est un objet dont le nom est : `global`. Cependant, les variables et fonctions utilisateurs nr sont pas définies dedans par défaut.

## Modules Node.js
Tout fichier `.js` est un module. Chaque module dispose de 5 paramètres lui permettant de communiquer avec les autres modules :

| Objet | Définition |
| ----- | ---------- |
|**module**  | Un objet contenant l'ensemble des informations sur le module |
|**exports** | ou encore **module.exports** est un objet permettant de contenir l'ensemble des données à exporter |
|**require** | Fonction permettant d'importer ce qui est exporté par un autre module |
|**__filename** | Nom du fichier du module |
|**__dirname** | Chemin du module |