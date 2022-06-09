# Mini Rapport Projet - MakeAWich
### Cours de Design Pattern - Juin 2022
### Equipe 5 : Nicolas Aubert, Alexandre Besia, Guillaume Mouchet
---
## Contexte
Dans le cadre du cours de Design Pattern, nous avons réalisé un court projet permettant de consolider les connaissances acquises durant celui-ci. Il nous fallait utiliser 3 Design Pattern différents dont au moins 2 vus en classe et un autre externe.

## Projets

Nous nous sommes inspirés de l'exemple vu en classe sur les différents types de café StarBuzz. Nous avons créé une application permettant de créer des sandwichs personnalisables, où l'utilisateur choisit les ingrédients qu'il souhaite.

Afin de faciliter l'implémentation de la partie "personnalisation d'un sandwich", nous avons utilisé le Design Pattern <i>Décorateur</i>.

**Étoffer**

Nous avons décidé de réalisé une application web (site web) afin de fournir une interface universelle pour les utilisateurs. Pour avoir une structure fonctionnelle, intéressante et simple, avec l'accord de M Gobron, nous avons utilisé une architecture MVC (Model-View-Controller). Nous reviendrons plus en détails sur celle-ci plus tard.

Finalement, comme nous voulions intégrer un système de panier / commande, nous avons eut alors besoin d'un espace de stockage. C'est pourquoi nous avons pensé au Design Pattern Singleton, afin de limiter à un le nombre d'instance de notre classe de stockage.

## Pattern MVC
Ce pattern, de type **architectural**,  met en place un principe primordial dans la programmation, "diviser pour mieux régner". Cela permet de structurer l'application, et ainsi soulager sa charge de travail ; éviter qu'elle ne s'occupe de tout. Les responsabilités sont séparées en trois partie bien distinctes :
- Modèle,
- Vue,
- Controller

### Les modèles

Le modèle, il s'occupe des données de l'application Web, comment elles sont stockées et les différentes méthodes qui permetterait de les modifier, comme des setters, getters ou des fetchs dans le cas d'une base de données.

### Les vues

La vue, est l'interface graphique de l'application, c'est avec elle que se fait les interactions entre l'utilisateur et le code métier, elle ne contient presque aucune logique, elle s'occupe d'afficher ce qu'on lui donne.

### Les controllers

Le controller, c'est la qu'on retrouve la logique métier, on trouvera dans les contrôlers, les calculs, les algorithmes et le traitement des données, il fait l'intermédiaire entre la vue et le modèle pour s'assurer que les valeurs que chacun s'envoie sont conformes.

### Forces

Facile à maintenir, vu que les tâches sont séparée il est facile d'aller faire des modifications.
Le développement peut se faire en parallèle car il n'est pas nécessaire de connaitre le fonctionnement du modèle pour faire fonctionner la vue, il suffit de faire appel à une fonction du contrôller qui donnera les informations du modèle.
La séparation des vues permet de tester le code de manière plus simple.

### Faiblesses

Il existe des difficultés à utiliser MVC avec le développement front-end moderne (frameworks fronts orientés composants).
En cas d'utilisation d'outils tier peu de souplesse est laissée au programmeur.
Les interactions entre les vues et les modèles sont bidirectionnels et nombreuses, ce qui complique le développement.

## Pattern Decorator (Décorateur)

Un décorateur permet de modifier d'ajouter des comportements à une classe, et ce dynamiquement, sans pour autant modifier son implémentation.
Il englobe la classe dans une nouvelle classe qui implémente alors les nouveaux comportements. 

Dans notre cas on aimerait créer des sandwichs avec des suppléments, sans le décorateur il faudrait créé une classe pour chaque combinaisons de sandwich possible, ce qui est impossible à réaliser si les suppléments peuvent être infini.
A la place à l'aide du décorateur nous les ajoutons à l'exécution et non à la compilations, on crée des embaleurs qui implémentent les suppléments de notre sandwich, et à l'execution on place notre sandwich dans ces différents emballeurs.


### Forces
Il est très facile d'ajouter un nouveau supplément (un nouveau comportement), une fois la structure principale en place. Il n'y a aucune adaptation à faire. 

Les différents décorateurs peuvent être ajoutés dans n'importe quel ordre et en quantité illimitée. Les décorateurs appuient bien le principe selon lequel les classes doivent être extensibles, mais non modifiables ("SOLID").

Comme on peut ajouter autant de décorateurs que l'on veut sur un objet, on peut se servir de ce principe pour combiner des effets.   

### Faiblesses

Quand on commence à avoir beaucoup de décorateurs, le code devient difficile à maintenir, car tous les décorateurs se ressemblent énormément au niveau du code.

Si l'interface Decorator possède plusieurs méthodes, tous les décorateurs doivent implémenter toutes ces méthodes. Contrairement à l'héritage où les enfants peuvent reprendre les méthodes de la classe parente sans les redéfinir.

Retirer un décorateur spécifique de la pile est compliqué.

## Le Singleton
Le singleton est un design pattern dont l'objectif est de limiter le nombre d'instance d'une classe, afin de gagner en espace mémoire. Généralement, le singleton limite le nombre d'instance à 1, mais il est possible de faire varier cette valeur.


### Faiblesses Singleton
Utiliser un singleton complique les tests unitaires. Le couplage entre une classe et un singleton est, du fait que le singleton introduit des états globaux à l'application, un couplage fort. Ce couplage fort empêche les tests unitaires sur une classe seule, on se retrouve à tester la classe et son singleton. 

Utiliser un singleton a tendance à cacher les dépendances. Habituellement, quand une classe a besoin d'une ressource externe, c'est immédiatement visible. Mais dans le cas d'un singleton, quand une classe l'appelle, ça ne se voit pas directement dans le constructeur ou les méthodes.

Si on crée un singleton avec la méthode populaire de lazy loading 

```CPP
public static Singleton getInstance() {
    if (instance == null) {
        instance = new Singleton();
    }
    return instance;
} 
```
il est possible de se retrouver avec plusieurs instances de singleton dans le cas où plusieurs thread accèdent en parallèle à la méthode <i>getInstance()</i>.


### Forces Singleton
Un singleton peut servir à coordonner un programme autour d'une unique instance. Par exemple la gameloop d'un jeu est souvent un singleton car on a besoin d'une seule boucle pour tout le jeu.

Une autre force du singleton est son efficacité. En limitant le nombre d'instance en mémoire et en forçant tout le monde à référer à cette unique instance (au lieu d'avoir chaque utilisateur qui crée une nouvelle instance). Ceci économise de la place en mémoire en évitant la redondance.

Le singleton a aussi l'avantage de n'être instancié que quand il est nécessaire (lazy loading).

Un singleton permet d'éviter de déconnecter/reconnecter un utilisateur à un service. Par exemple, si l'utilisateur est connecté sur un site et qu'il appuie de nouveau sur le bouton connecter, le singleton de connexion étant déjà instancié, l'utilisateur ne sera pas déconnecté.

## Méthodologie

// Expliquer comment on a fait les trucs : Pourquoi on les utilise et comment ?

### Décorateur

Pour mettre en place ce pattern, nous avons besoin d'une interface contenant les méthodes que les décorateurs devront implémenter. Nous avons appelé celle-ci *ISandwich*. Étant donné que notre projet à intégralement été réalisé en Javascript (qui ne possède pas d'interface), nous avons eu recours à des asctures permettant de simuler une clases abstraite. En effet, lors de la construction d'un objet implémentant *ISandwich*, il est nécessaire de contrôler l'existence des fonctions. L'extrait suivant démontre cela :

```javascript
class ISandwich
{
    constructor() {
        // If the class that is instanciated is Component, throw an exception
        if (this.constructor == ISandwich) {
            throw new TypeError(
                'Abtract class "ISandwich" cannot be instantiated directly.'
            );
        }

        // If calculatePrice is not implemented, throw an exeption
        if (this.calculatePrice === undefined) {
            throw new TypeError(
                'Classes extending the abstract class "ISandwich" must contain "calculatePrice()"'
            );
        }
    }
}
```

Notre classe *ISandwich* contient les méthodes :
- ***calculatePrice*** permettant de calculer le prix de l'ingrédient ainsi que ceux qu'il englobe,
- ***getNameAsList*** permettant d'obtenir, sous forme de liste, les ingrédients composants le sandwich.

Cette classe/interface est implémentée par la classe *Ingredient*, qui doit alors redéfinir ces deux méthodes.

Par la suite, nous avons créé une classe *IngredientDeco*

**À continuer**

### Singleton

Javascript met à disposition une propriété nommée *localStorage*, qui est un espace stockage similaire à une session, mais avec l'avantage de n'avoir pas de délai d'expiration. Cette propriété possède des méthodes rudimentaires permettant de stocker, lire et supprimer des données au format texte et JSON.

Nous avons alors décidé d'englober cet espace de stockage dans une classe nommée *Storage*, afin d'étendre ses fonctionnalités, répondant à nos besoins.
Cette classe, comme discuté auparavant, est un Singleton ; cela permet de limiter de nombre d'instance de la classe et donc d'économiser la mémoire utiliser par notre programme.

Afin de créer une classe Singleton, il convient d'y ajouter un attribut **statique privé**, qui contiendra l'unique instance. Le constructeur de classe est privé, puisqu'elle peut être uniquement instanciée par la classe elle-même.

Le seul moyen d'accéder à l'instance est la méthode **getInstance()**, qui contrôle si l'instance existe. Si ce n'est pas le cas, elle l'a crée et la place dans l'attribut statique.

**Extrait de code ?**

### MVC

**TODO**



## Conclusion
Pour conclure le projet rempli les objectifs que nous nous étions donnés. Le site permet de simuler une commande de sandwich en utilisant de manière intelligente les différents Design Pattern choisi. 
Une problématique est que l'application est censé être en plug and play, ce qui rend impossible d'utiliser les outils vu pendant le cours d'application Web de Marc Schaeffer, comme DevServer et EasyPHP, nous avons donc opté pour simuler un router afin de quand même pouvoir avoir un site web avec des redirection sémantique, nous nous sommes inspirés de cet exemple[TODO SITER LE TRUC DE NICO]pour parvenir à ce resultat.

## Références

Freelance Talks, 2021, L'architescture MVC : bien la comprendre [en ligne], Modifié le 27 juillet 2021, [Consulté le 08 juin 2022]. Disponible à l'adresse : https://talks.freelancerepublik.com/comprendre-utiliser-architecture-mvc/#Les_avantages_et_inconvenients_du_pattern_MVC


Stack overflow, 2022, Simplest/cleanest way to implement a singleton in JavaScript [en ligne], Modifié en Septembre 2021, [Consutlé le 30 mars 2022]. Disponible à l’adresse : https://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-a-singleton-in-javascript

Vojtech Ruzicka's Programming Blog, 2016, Singleton Pattern Pitfalls [en ligne], Modifié le 3 juillet 2019, [Consulté le 30 mars 2022]. Disponible à l’adresse : https://www.vojtechruzicka.com/singleton-pattern-pitfalls/

Stack overflow, 2022, What is the advantage of Singleton Design Pattern [en ligne], Août 2021, [Consulté le 30 mars 2022]. Disponible à l’adresse :
https://stackoverflow.com/questions/12901734/what-is-the-advantage-of-singleton-design-pattern

dzone.com, 2022, Is Inheritance Dead? A Detailed Look Into the Decorator Pattern [en ligne], 17 septembre 2019 [en ligne], [Consulté le 26 avril 2022]. Disponible à l'adresse :
https://dzone.com/articles/is-inheritance-dead

Refactoring.Guru., 2022, Décorateur [en ligne], Date inconnue [consulté le 26 avril 2022]. Disponible à l'adresse :
https://refactoring.guru/fr/design-patterns/decorator