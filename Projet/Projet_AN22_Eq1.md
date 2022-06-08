# Mini Rapport Projet - MakeAWich
### Cours de Design Pattern - Juin 2022
### Equipe 5 : Nicolas Aubert, Alexandre Besia, Guillaume Mouchet
---
## Contexte
Dans le cadre du cours de Design Pattern, il nous a été demandé de réaliser un court projet permettant de mettre en place les connaissances acquises durant celui-ci. Il nous fallait utiliser 3 Design Pattern différents dont au moins 2 vu en classe et un autre externe.
Nous nous sommes inspiré de l'exemple vu en classe sur les différents type de café StarBucks et nous avons voulu faire la même chose mais pour des sandwichs, comme pourrait le faire Subway, ou chaque consommateur peut construire son repas comme il veut.
Nous avons décider d'utiliser le Design Pattern Decorator afin de nous permettre de facilement ajouter des ingrédients sur dans notre pain, Nous avons aussi mis en place le principe de Modèle-Vue-Controller.

### Design Pattern
## MVC
Ce pattern met en place un principe primordial dans la programmation, "diviser pour mieux régner", afin d'éviter qu'un application s'occupe de tout faire les responsabilité sont séparée en 3:
* Le modèle, il s'occupe des données de l'application Web, comment elles sont stockée et les différentes méthodes qui permetterait de les modifiers, comme des setters, getters ou des fetchs dans le cas d'une base de données.
* La vue, est l'interface graphique de l'application, c'est avec elle que se fait les interactions entre l'utilisateur et le code métier, elle ne contient presque aucune logique, elle s'occupe d'afficher ce qu'on lui donne.
* Le controller, c'est la qu'on retrouve la logique métier, on trouvera dans les contrôlers, les calculs, les algorithmes et le traitement des données, il fait l'intermédiaire entre la vue et le modèle pour s'assurer que les valeurs que chacun s'envoie sont conformes.
## Forces
Facile à maintenir, vu que les tâches sont séparée il est facile d'aller faire des modifications.
Le développement peut se faire en parallèle car il n'est pas nécessaire de connaitre le fonctionnement du modèle pour faire fonctionner la vue, il suffit de faire appel à une function du contrôller qui donnera les informations du modèle.
La séparation des vues permet de tester le code de manière plus simple.
## Faiblesses
Il existe des difficultés à utiliser MVC avec le développement front-end moderne (frameworks fronts orientés composants).
En cas d'utilisation d'outils tier peu de souplesse est laissée au programmeur.
Les interactions entre les vues et les modèles sont bidirectionnels et nombreuses, ce qui complique le développement.


## Decorateur
Un décorateur permet de modifier le comportement d'une classe dynamiquement, sans pour autant modifier son implémentation.
Il englobe la classe dans une nouvelle classe qui implémente alors les nouveaux comportements. 

Par exemple si on fait un programme qui créer un café Starbucks, et qu'on peut avoir entre 1 et 4 suppléments, il faudrait créer des dizaines de classes pour chaque combinaison possible. À la place de faire ça, on peut ajouter les suppléments à l'exécution (et non à la compilation), on crée alors des "embaleurs" qui implémentent les différents suppléments de notre café et on place l'objet café dans ces emballeurs à l'exécution.


## Forces
Il est très facile d'ajouter un nouveau supplément (un nouveau comportement), une fois la structure principale en place. Il n'y a aucune adaptation à faire. 

Les différents décorateurs peuvent être ajoutés dans n'importe quel ordre et en quantité illimitée. Les décorateurs appuient bien le principe selon lequel les classes doivent être extensibles, mais non modifiables ("SOLID").

Comme on peut ajouter autant de décorateurs que l'on veut sur un objet, on peut se servir de ce principe pour combiner des effets.   

## Faiblesses

Quand on commence à avoir beaucoup de décorateurs, le code devient difficile à maintenir, car tous les décorateurs se ressemblent énormément au niveau du code.

Si l'interface Decorator possède plusieurs méthodes, tous les décorateurs doivent implémenter toutes ces méthodes. Contrairement à l'héritage où les enfants peuvent reprendre les méthodes de la classe parente sans les redéfinir.

Retirer un décorateur spécifique de la pile est compliqué.



## ??????
## Forces
## Faiblesses

## Méthodologie


## Conclusion
Pour conclure le projet rempli les objectifs que nous nous étions donnés. Le site permet de simuler une commande de sandwich en utilisant de manière intelligente les différents Design Pattern choisi. 
Une problématique est que l'application est censé être en plug and play, ce qui rend impossible d'utiliser les outils vu pendant le cours d'application Web de Marc Schaeffer, comme DevServer et EasyPHP, nous avons donc opté pour simuler un router afin de quand même pouvoir avoir un site web avec des redirection sémantique, nous nous sommes inspirés de cet exemple[TODO SITER LE TRUC DE NICO]pour parvenir à ce resultat.

## Références

https://talks.freelancerepublik.com/comprendre-utiliser-architecture-mvc/#Les_avantages_et_inconvenients_du_pattern_MVC

https://www.dofactory.com/javascript/design-patterns/decorator#:~:text=The%20Decorator%20pattern%20extends%20(decorates,functionality%20to%20the%20original%20object.

https://refactoring.guru/fr/design-patterns/decorator

Liste des différents design patterns : https://refactoring.guru/fr/design-patterns

Exemple d'architecture MVC en Javascript pure : https://www.taniarascia.com/javascript-mvc-todo-app/