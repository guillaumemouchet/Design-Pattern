# Mini Rapport Projet - SandwichMaker
### Cours de Design Pattern - juin 2022
### Équipe 1 : Nicolas Aubert, Alexandre Besia, Guillaume Mouchet
---
## Contexte
Dans le cadre du cours de Design Pattern, nous avons réalisé un court projet permettant de consolider les connaissances acquises durant celui-ci. Il nous fallait utiliser trois Design Patterns différents dont au moins deux vus en classe et un autre externe.

## Projets

Nous nous sommes inspirés de l'exemple vu en classe sur les différents types de café StarBuzz. Nous avons créé une application permettant de créer des sandwichs personnalisables, où l'utilisateur choisit les ingrédients qu'il souhaite.

Afin de faciliter l'implémentation de la partie "personnalisation d'un sandwich", nous avons utilisé le Design Pattern <i>Décorateur</i>.

Nous avons décidé de réaliser une application web (site web) afin de fournir une interface universelle pour les utilisateurs. Pour avoir une structure fonctionnelle, intéressante et simple, avec l'accord de M. Gobron, nous avons utilisé une architecture MVC (Model-View-Controller). Nous reviendrons plus en détails sur celle-ci plus tard.

Finalement, comme nous voulions intégrer un système de panier / commande, nous avons eu alors besoin d'un espace de stockage. C'est pourquoi nous avons pensé au Design Pattern Singleton, afin de limiter à un le nombre d'instances de notre classe de stockage.

## Pattern MVC
Ce pattern, de type **architectural**,  met en place un principe primordial dans la programmation, "diviser pour mieux régner". Cela permet de structurer l'application, et ainsi soulager sa charge de travail ; éviter qu'elle ne s'occupe de tout. Les responsabilités sont séparées en trois parties bien distinctes :
- Modèle,
- Vue,
- Controller

### Les modèles

Le modèle s'occupe des données de l'application Web, comment elles sont stockées et les différentes méthodes qui permettraient de les modifier, comme des setters, getters ou des fetchs dans le cas d'une base de données.

### Les vues

La vue est l'interface graphique de l'application, c'est avec elle que se fait les interactions entre l'utilisateur et le code métier. Elle ne contient presque aucune logique et s'occupe uniquement d'afficher les données (modèles).

### Les Controllers

Le controller contient la logique métier : les calculs, les algorithmes ainsi que le traitement des données. Un controller lie le modèle et la vue. Il récupère les données nécessaires (base de données ou autre), puis les transmet à la vue correspondante, qui s'occupera de les afficher correctement.
Un controller peut également récupérer des données entrées par l'utilisateur, pour ensuite les traiter (contrôle de saisie, etc.), et potentiellement les enregistrer ou les mettre à jour dans une base de données.

### Forces

Facile à maintenir car les tâches sont séparées : l'ajout ainsi que la modification de fonctionnalités sont alors simplifiés.

Comme le modèle ne connait pas la vue, il est possible de les développer en parallèle. Il suffira par la suite, dans le bon controller, d'ajouter une méthode qui récupéra les données à partir du modèle, pour les envoyer à la vue.

### Faiblesses

Il existe des difficultés à utiliser MVC avec le développement front-end moderne (frameworks fronts orientés composants).

En cas d'utilisation d'outils tiers, peu de souplesse est laissé au programmeur.
Les interactions entre les vues et les modèles sont bidirectionnelles et nombreuses, ce qui complique le développement.

## Pattern Decorator (Décorateur)

Un décorateur permet de modifier ou d'ajouter des comportements à une classe, et ce dynamiquement, sans pour autant modifier son implémentation.
Il englobe la classe dans une nouvelle classe qui implémente alors les nouveaux comportements. 

Dans notre cas on aimerait créer des sandwichs avec des suppléments, sans le décorateur il faudrait créer une classe pour chaque combinaison de sandwich possible, ce qui est impossible à réaliser si les suppléments peuvent être infini.
À la place à l'aide du décorateur nous les ajoutons à l'exécution et non à la compilation, on crée des emballeurs qui implémentent les suppléments de notre sandwich, et à l'exécution on place notre sandwich dans ces différents emballeurs.

### Forces
Il est très facile d'ajouter un nouveau supplément (un nouveau comportement), une fois la structure principale en place. Il n'y a aucune adaptation à faire. 

Les différents décorateurs peuvent être ajoutés dans n'importe quel ordre et en quantité illimitée. Les décorateurs appuient bien le principe selon lequel les classes doivent être extensibles, mais non modifiables ("SOLID").

Comme on peut ajouter autant de décorateurs que l'on veut sur un objet, on peut se servir de ce principe pour combiner des effets.   

### Faiblesses

Quand on commence à avoir beaucoup de décorateurs, le code devient difficile à maintenir, car tous les décorateurs se ressemblent énormément au niveau du code.

Si l'interface Decorator possède plusieurs méthodes, tous les décorateurs doivent implémenter toutes ces méthodes. Contrairement à l'héritage où les enfants peuvent reprendre les méthodes de la classe parente sans les redéfinir.

Retirer un décorateur spécifique de la pile est compliqué.

## Le Singleton
Le singleton est un design pattern dont l'objectif est de limiter le nombre d'instances d'une classe, afin de gagner en espace mémoire. Généralement, le singleton limite le nombre d'instances à 1, mais il est possible de faire varier cette valeur.

### Faiblesses Singleton
Utiliser un singleton complique les tests unitaires. Le couplage entre une classe et un singleton est, du fait que le singleton introduit des états globaux à l'application, un couplage fort. Ce couplage fort empêche les tests unitaires sur une classe seule, on se retrouve à tester la classe et son singleton. 

Utiliser un singleton a tendance à cacher les dépendances. Habituellement, quand une classe a besoin d'une ressource externe, c'est immédiatement visible. Mais dans le cas d'un singleton, quand une classe l'appelle, ça ne se voit pas directement dans le constructeur ou les méthodes.

Si on crée un singleton avec la méthode populaire de lazy loading 

```CPP
public static Singleton getInstance()
{     
    if (instance == null)
    {         
        instance = new Singleton();
    }
    return instance;
} 
```
Il est possible de se retrouver avec plusieurs instances de singleton dans le cas où plusieurs thread accèdent en parallèle à la méthode <i>getInstance()</i>.

### Forces Singleton
Un singleton peut servir à coordonner un programme autour d'une unique instance. Par exemple la gameloop d'un jeu est souvent un singleton, car on a besoin d'une seule boucle pour tout le jeu.

Une autre force du singleton est son efficacité. En limitant le nombre d'instances en mémoire et en forçant tout le monde à référer à cette unique instance (au lieu d'avoir chaque utilisateur qui crée une nouvelle instance). Ceci économise de la place en mémoire en évitant la redondance.

Le singleton a aussi l'avantage de n'être instancié que quand il est nécessaire (lazy loading).

Un singleton permet d'éviter de déconnecter/reconnecter un utilisateur à un service. Par exemple, si l'utilisateur est connecté sur un site et qu'il appuie de nouveau sur le bouton connecter, le singleton de connexion étant déjà instancié, l'utilisateur ne sera pas déconnecté.

## Méthodologie

### Décorateur

Pour mettre en place ce pattern, nous avons besoin d'une interface contenant les méthodes que les décorateurs devront implémenter. Nous avons appelé celle-ci *ISandwich*. Étant donné que notre projet a intégralement été réalisé en JavaScript (qui ne possède pas d'interface), nous avons eu recours à des astuces permettant de simuler une classe abstraite. En effet, lors de la construction d'un objet implémentant *ISandwich*, il est nécessaire de contrôler l'existence des fonctions. L'extrait suivant démontre cela :

```js 
class ISandwich 
{
    constructor()
    {         
        // If the class that is instanciated is Component, throw an exception         
        if (this.constructor == ISandwich)
        {             
            throw new TypeError('Abtract class "ISandwich" cannot be instantiated directly.');
        }

        // If calculatePrice is not implemented, throw an exeption 
        if (this.calculatePrice === undefined)
        {             
            throw new TypeError('Classes extending the abstract class "ISandwich" must contain "calculatePrice()"');
        } 
    }
}  

```

Notre classe *ISandwich* contient les méthodes :
- ***calculatePrice*** permettant de calculer le prix de l'ingrédient ainsi que ceux qu'il englobe,
- ***getNameAsList*** permettant d'obtenir, sous forme de liste, les ingrédients composant le sandwich.

Cette classe/interface est implémentée par la classe *Ingredient*, qui doit alors redéfinir ces deux méthodes.

Par la suite, nous avons créé une classe *IngredientDeco*, qui possède, en plus des attributs de la classe *Ingredient*, le champ "sandwich", qui représente le sandwich qu'il décore. Cette classe doit redéfinir les deux méthodes ci-dessus, en appelant d'abord celles du fichier qu'il encapsule.

```js 
calculatePrice()
{
    return this.sandwich.calculatePrice() + this.price;
}

getNameAsList()
{
    return this.sandwich.getNameAsList() + 'Nom : ' + this.name + ', Prix : '+ this.price +' CHF\n';
}
```

L'exemple suivant démontre la création d'un ingrédient *Pain*, décoré ensuite avec l'ingrédient *Salade*.

```js 
let pain = new Ingredient("Pain", 1.2);

pain.calculatePrice(); // 1.2 pain.getNameAsList(); // Nom : Pain, Prix : 1.2 CHF

let painAvecSalade = new IngredientDeco(pain, "Salade", 0.5);

painAvecSalade.calculatePrice(); // 1.7 
painAvecSalade.getNameAsList();
// Nom : Pain, Prix : 1.2 CHF // Nom : Salade, Prix : 0.5 CHF

```

### Singleton

JavaScript met à disposition une propriété nommée *localStorage*, qui est un espace stockage similaire à une session, mais avec l'avantage de n'avoir pas de délai d'expiration. Cette propriété possède des méthodes rudimentaires permettant de stocker, lire et supprimer des données au format texte et JSON.

Nous avons alors décidé d'englober cet espace de stockage dans une classe nommée *Storage*, afin d'étendre ses fonctionnalités, répondant à nos besoins.
Cette classe, comme discuté auparavant, est un Singleton ; cela permet de limiter de nombre d'instances de la classe et donc d'économiser la mémoire utilisée par notre programme.

Afin de créer une classe Singleton, il convient d'y ajouter un attribut **statique privé**, qui contiendra l'unique instance. Le constructeur de classe est privé, puisqu'elle peut être uniquement instanciée par la classe elle-même.

Le seul moyen d'accéder à l'instance est la méthode **getInstance()**, qui contrôle si l'instance existe. Si ce n'est pas le cas, elle l'a créé et la place dans l'attribut statique.

L'extrait de code suivant est un exemple très simple d'un Singleton en JavaScript :

```js 
class Storage  
{
    // Instance privée, initialement à null     
    static #storageInstance = null;

    // Méthode de récupération de l'instance     
    static getInstance()     
    {
        // Si l'instance n'existe pas         
        if(Storage.#storageInstance == null) 
        {
        // Elle est alors créée et placée dans l'attribut    
            Storage.#storageInstance = new Storage();
        }

        // Puis, dans tous les cas, elle est retournée         
        return Storage.#storageInstance;
    }

    methodXX() { /* ... */ }

    methodXY() { /* ... */ } 
}

```

### MVC

Premièrement, après avoir mis en place notre espace de stockage, nous nous sommes penchés sur la partie "Modèle".
Afin d'obtenir le code le plus générique possible, nous avons créé une classe nommée *Model*. Celle-ci possède des méthodes statiques privées, telles que *save()*, *update()*, *delete()*, *fetch()*, ainsi que *fetchAll()*, qui seront utilisées dans nos modèles concrêts.

Le premier modèle dont nous avons eu besoin fut le *Ingredient*, qui possède un nom ainsi qu'un prix en tant qu'attributs. Étant donné que notre application ne possède pas de gestion des ingrédients, et que ceux-ci sont stockés lors du lancement de l'application, nous n'avons pas eu besoin d'implémenter le CRUD en entier. Seules les méthodes *fetch()* et *fetchAll*, permettant de récupérer des ingrédients, ont été nécessaires.

Par la suite, nous avons modifié notre classe *IngredientDeco* pour que celle-ci hérite également de la classe *Model*. Comme les décorateurs représentent un sandwich, contrairement au modèle *Ingredient*, et qu'un sandwich doit pouvoir être enregistré, il a été nécessaire d'implémenter toutes les fonctions du CRUD.

Maintenant que nos modèles principaux sont créés, nous pouvons passer à la phase suivante afin de tester s'ils fonctionnent correctement.

Nous avons alors créé le controller *SandwichController*, qui s'occupe de récupérer les ingrédients (sandwichs) ainsi que le sandwich en train d'être créé, et de les transmettre à la vue afin que celle-ci puisse les afficher. Il doit donc avoir accès à la vue, ainsi qu'aux ingrédients et au sandwich.

Tout cela se fait dans une méthode appelée *showCreateSandwichView* : 

```js 
class SandwichController   
{
    showCreateSandwichView()    
    {
        // Récupération de la vue         
        this.view = new CreateSandwichView();
        // Récupération du sandwich         
        this.sandwich = Ingredient.fetchSandwich();
    }
    ...
}
```

La classe *CreateSandwichView* met en place, dans son constructeur, les éléments principaux de la page (titre, boutons ...). Elle possède également les méthodes *displayCurrentSandwich* et *displayAvailableIngredients*, prenant comme paramètres, respectivement le sandwich courant et la liste des ingrédients.

Dans ces deux fonctions, elle passe en revue les différents éléments, puis ajoute les éléments nécessaires au DOM afin de créer un affichage.

Nous pouvons donc, depuis notre controller, appeler ces deux méthodes :

```js 
class SandwichController   
{
    showCreateSandwichView()     
    {
        // Récupération de la vue         
        this.view = new CreateSandwichView();
        // Récupération du sandwich         
        this.sandwich = Ingredient.fetchSandwich();

        // Demande à la vue d'afficher la liste d'ingrédients         
        this.view.displayAvailableIngredients(Ingredient.fetchAll());
        // Demande à la vue d'afficher le sandwich courant         
        this.view.displayCurrentSandwich(this.sandwich);
    }
...
}
```
La liste d'ingrédients est récupérée, comme expliqué précédemment, depuis le modèle correspondant.

Maintenant que les trois parties du MVC sont implémentées, nous avons besoin d'un mécanisme permettant d'instancier le bon controller et appeler sa bonne méthode, en fonction de la route (URI). Ceci est le principe d'un *routeur*.

Comme notre application doit être plug-and-play, nous avons choisi de ne pas utiliser de serveur particulier, ce qui a compliqué la tâche de création du routeur. En effet, sans serveur, il n'est pas possible de récupérer la route */create_sandwich* et de l'URL *chemin/du/fichier/index.html/create_sandwich*, puisque le navigateur considère cela comme un fichier.

L'astuce suivante a été utilisée afin de tout de même rendre le routage possible : la route est précisée dans un paramètre de l'URL, nommé *route*. En reprenant l'exemple précédent, l'URl devient alors *chemin/du/fichier/index.html&route=create_sandwich*, où la route est *create_sandwich*.

Notre application est maintenant capable de récupérer la route, mais ne sait toujours pas quel controller utiliser. Il est nécessaire de stocker chaque route et son controller + méthode correspondante. Cela a été fait dans un fichier séparé, nommé *routes.js*, ayant la structure suivante :

```js 
const routes = 
{     
    "index" : // Route     
    {
        "controller" : IndexController, // Controller         
        "method" : 'index' // Méthode du controller     
    },
    "create_sandwich" :     
    {
        "controller" : SandwichController,         
        "method" : 'showCreateSandwichView'     
    },
    "unknown" :     
    {
        "controller" : IndexController,         
        "method" : "showUnknownRoute"    
    }
}
```

En reprenant tous ces aspects, le routeur devient alors :

```js
// Récupération des potentiels paramètres de l'URL
const params = new URLSearchParams(window.location.search);

// Récupération du paramètre "route" 
let routeParam = params.get("route");

// Si la route n'est pas définie dans le fichier "routes.js" 
if(routes[routeParam] == undefined)
{
    // Modifier la route pour "inconnue"     
    routeParam = "unknown";
}

// Récupérer le controller correspondant 
const controller = routes[routeParam].controller;

// Récupérer la méthode correspondante 
const method = routes[routeParam].method;

// Créer une instance du controller
const app = new controller();

// Appeler la méthode du controller 
app[method]();
```

Pour intégrer les autres vues et controllers (CommandController p.e.), nous avons suivi la même démarche.

## Conclusion
Pour conclure, le projet remplit les objectifs que nous nous étions donnés. Le site permet de simuler une commande de sandwich en utilisant de manière intelligente les différents Design Pattern choisis. 
Une problématique est que l'application est censée être en plug and play, ce qui rend impossible d'utiliser les outils vus pendant le cours d'application Web de Marc Schaeffer, comme DevServer et EasyPHP. Nous avons donc opté pour simuler un router afin de quand même pouvoir avoir un site web avec des redirections sémantiques, pour parvenir à ce résultat. Afin de mettre en place ce modèle MVC nous nous sommes inspiré de l'implémentation de Tania Racsia sur GitHub.

## Références

GitHub, 2022, Tania Rascia MVC[en ligne], modifié le 11 septembre 2019 [Consulté de 02 juin 2022]. Disponible à l'adresse : https://github.com/taniarascia/mvc
Freelance Talks, 2021, l'architecture MVC : bien la comprendre [en ligne], modifié le 27 juillet 2021 [consulté le 08 juin 2022]. Disponible à l'adresse : https://talks.freelancerepublik.com/comprendre-utiliser-architecture-mvc/#Les_avantages_et_inconvenients_du_pattern_MVC

Stack overflow, 2022, Simplest/cleanest way to implement a singleton in JavaScript [en ligne], Modifié en Septembre 2021, [Consulté le 30 mars 2022]. Disponible à l’adresse : https://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-a-singleton-in-javascript

Vojtech Ruzicka's Programming Blog, 2016, Singleton Pattern Pitfalls [en ligne], modifié le 3 juillet 2019 [consulté le 30 mars 2022]. Disponible à l’adresse : https://www.vojtechruzicka.com/singleton-pattern-pitfalls/

Stack overflow, 2022, What is the advantage of Singleton Design Pattern [en ligne], Août 2021, [Consulté le 30 mars 2022]. Disponible à l’adresse : https://stackoverflow.com/questions/12901734/what-is-the-advantage-of-singleton-design-pattern

dzone.com, 2022, Is Inheritance Dead? A Detailed Look Into the Decorator Pattern [en ligne], 17 septembre 2019 [en ligne], [Consulté le 26 avril 2022]. Disponible à l'adresse : https://dzone.com/articles/is-inheritance-dead

Refactoring.Guru., 2022, Décorateur [en ligne], date inconnue [consulté le 26 avril 2022]. Disponible à l'adresse : https://refactoring.guru/fr/design-patterns/decorator
