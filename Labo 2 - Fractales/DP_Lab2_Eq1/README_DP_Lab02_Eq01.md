/*-------------<br>
Design Patterns<br>
Labo 02<br>
Equipe 01 : M. Guillaume Mouchet, M. Nicolas Aubert, M. Alexandre Besia<br>
-------------*/

## 1. Structure source
La demande pour cet exercice est de créer des fractales, nous sommes partis sur l'idée de faire des fractacles chaotiques, ou les angles et le nombre d'enfants seraient aléatoires. Nous avons aussi utilisé le bruit pour faire bouger légérement nos fractales.
Le résultat final est trois fractales ressemblant à des algues de couleurs différentes, flottantent au fond de l'océan, perturbées par un courant marin (simulé par le bruit).
Les contraintes pour ce Labo sont d'utiliser les Design Pattern suivant:

 * Singleton
 * Composite
 

Le Singleton à été utilisé sur une classe "Drawer" qui permet de dessiner soit un cercle ou une ligne suivant une coordonnée et une couleur.
Ce qui fait qu'à chaque fois qu'une ligne ou qu'un cercle veulent se créer ils utilisent la même instance de dessin.

Nous avons utilisé le Composite pour faire les branches et les feuilles des fractales.<br>
D'une classe "Component" abstraite nous avons fais deux filles, "Branch" et "Leaf" qui hérite toutes deux de draw() et de update().
La branche permet de créer un nombre aléatoire d'enfants.Si aucun n'est crée ou que la taille maximal est atteinte on crée une feuille (Symbolisée par les ronds jaunes). <br>

## 2. Amélioration possibles


## 3. Le DP
Le singleton est un design pattern dont l'objectif est de limiter le nombre d'instance d'une classe. Générallement le singleton limite le nombre d'instance à 1, mais il est possible de le limiter à n'importe quel valeure arbitraire (3 dans notre cas)


### 3.1 Faiblesses Singleton
Utiliser un singleton complique les tests unitaires. Le couplage entre une classe et un singleton est, du fait que le singleton introduit des états globaux à l'application, un couplage fort. Ce couplage fort empêche les tests unitaires sur une classe seule, on se retrouve à tester la classe et son singleton. 

Utiliser un singleton a tendance à cacher les dépendances. Habituellement, quand une classe a besoin d'une ressource externe c'est immédiatement visible. Mais dans le cas d'un singleton, quand une classe l'appel, ça ne se voit pas directement dans le constructeur ou les méthodes.

Si on créer un singleton avec la méthode populaire de lazy loading 

```CPP
public static Singleton getInstance() {
    if (instance == null) {
        instance = new Singleton();
    }
    return instance;
} 
```
il est possible de se retrouver avec plusieurs instances de singleton dans le cas où plusieurs thread accèdent en parallèle à la méthode getInstance()


### 3.2 Forces Singleton
Un singleton peut servir à coordiner un programme autour d'une unique instance. Par exemple la gameloop d'un jeu est souvent un singleton car on a besoin d'une seule boucle pour tout le jeu.

Une autre force du singleton est son efficacité. En limitant le nombre d'instance en mémoire et en forçant tout le monde à référer à cette unique instance (au lieu d'avoir chaque utilisateur qui créer une nouvelle instance). Ceci économise de la place en mémoire en évitant la redondance.

Le singleton a aussi l'avantage de n'être instancié que quand il est nécessaire (lazy loading).

Un singleton permet d'éviter de déconnecter/reconnecter un utilisateur à un service. Par exemple si l'utilisateur est connecté sur un site et qu'il appuis de nouveau sur le bouton connecter, le singleton de connexion étant déjà instancié, l'utilisateur ne sera pas déconnecté

### 3.3 Faiblesses Composite

### 3.4 Forces Composite


## 4. Conclusion
Dans votre rapport vous devez montrer clairement l’utilité des deux patterns!!

Le composite permet de fare un meilleur héritage à plusieurs niveaux.
Si nous prenons la création d'un arbre il pourrait être fait avec plusieurs classe différentes pour symbolysée différents type de branche suivant leur niveaux jusqu'à atteindre les feuilles mais ce qui ferait un travail fastidieux de créer chaque classes "Branche", "SousBranche", "SousSousBranche" etc et ne permetterait pas de changer facilement le nombre de niveaux de l'arbre.
Avec le Composite qui permet de faire des enfants de sa propre classe, il est facile de crée un arbre avec peu de classe car la récursivité fait que chaque fils est de la même classe parente, d'un Component on peut créer soit une Leaf, soit une Branche.

Le Singleton permet de faire de l'économie de mémoire, dans notre cas au lieu de recréer une instance de dessin à chaque endroit ou elle doit être utilisée (et donc de devoir la détruire). On utilise une instance qui à été faite dans la classe Mère Component qui est abstraite. Chaque enfant voudra créer une nouvelle instance de Drawer (vu que c'est dans le constructeur de la classe mère), mais ils ne pourront pas et utiliseront celle déjà créer.
## 5. Sources
Pour la création du Singleton:<br>
Stack overflow, 2022, Simplest/cleanest way to implement a singleton in JavaScript [en ligne], Modifié en Septembre 2021, [Consutlé le 30 mars 2022]. Disponible à l’adresse : https://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-a-singleton-in-javascript

Vojtech Ruzicka's Programming Blog, 2016, Singleton Pattern Pitfalls [en ligne], Modifié le 3 juillet 2019, [Consulté le 30 mars 2022]. Disponible à l’adresse : 
https://www.vojtechruzicka.com/singleton-pattern-pitfalls/

Stack overflow, 2022, What is the advantage of Singleton Design Pattern [en ligne], Août 2021, [Consulté le 30 mars 2022]. Disponible à l’adresse :
https://stackoverflow.com/questions/12901734/what-is-the-advantage-of-singleton-design-pattern


_____________________

### Option : Questions
-
-
-
