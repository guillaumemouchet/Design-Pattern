/*-------------<br>
Design Patterns<br>
Labo 03<br>
Équipe 01 : M. Guillaume Mouchet, M. Nicolas Aubert, M. Alexandre Besia<br>
-------------*/

## 1. Structure source
Le but de ce projet est de créer trois design pattern différent, le <i>Composite</i>, le <i>State</i> et le <i>Decorator</i>, puis de les mettre ensemble pour gérer un panier de fruits, simuler une commande à partir de ce panier, puis d'afficher son contenu suivant les envies de l'utilisateur, avec un décorateur.
## 2. Amélioration possible
L'affichage de notre panier reste basique, sans indentation, ce qui rend sa lecture parfois compliquée. Une bonne amélioration serait de mettre à  jour cet affichage à l'aide de tabulations en fonction de la profondeur des articles.
## 3. Les DPs

### 3.1 Le Composite
Le composite est un design pattern qui permet une conceptualisation structurelle de nos classes. Il permet d'agencer des objets dans une arborescence, où chaque objet est contenu et peut être aussi contenant.

### 3.1.1 Faiblesses Composite

Il ne s'applique qu'à des cas très spécifiques. Il peut être difficile de trouver une interface commune à plusieurs classes dans un projet, car les fonctionnalités sont trop différentes. Ce qui aboutit à une interface Component trop générique et plus difficile à comprendre.

### 3.1.2 Forces Composite

Il facilite le travail dans les structures arborescentes complexes, car il utilise de manière optimisée les avantages du polymorphisme et de la récursivité.

Principe ouvert/fermé. Il permet d'introduire facilement de nouveaux types d’éléments dans l'arborescence, sans avoir à réécrire la classe dans laquelle il existe. [refactoring.guru 2022]

### 3.2 Le Decorator

Un décorateur permet de modifier le comportement d'une classe dynamiquement, sans pour autant modifier son implémentation.
Il englobe la classe dans une nouvelle classe qui implémente alors les nouveaux comportements. 

Par exemple si on fait un programme qui créer un café Starbucks, et qu'on peut avoir entre 1 et 4 suppléments, il faudrait créer des dizaines de classes pour chaque combinaison possible. À la place de faire ça, on peut ajouter les suppléments à l'exécution (et non à la compilation), on crée alors des "embaleurs" qui implémentent les différents suppléments de notre café et on place l'objet café dans ces emballeurs à l'exécution.

### 3.2.1 Faiblesses Decorator

Quand on commence à avoir beaucoup de décorateurs, le code devient difficile à maintenir, car tous les décorateurs se ressemblent énormément au niveau du code.

Si l'interface Decorator possède plusieurs méthodes, tous les décorateurs doivent implémenter toutes ces méthodes. Contrairement à l'héritage où les enfants peuvent reprendre les méthodes de la classe parente sans les redéfinir.

Retirer un décorateur spécifique de la pile est compliqué.

### 3.2.2 Forces Decorator

Il est très facile d'ajouter un nouveau supplément (un nouveau comportement), une fois la structure principale en place. Il n'y a aucune adaptation à faire. 

Les différents décorateurs peuvent être ajoutés dans n'importe quel ordre et en quantité illimitée. Les décorateurs appuient bien le principe selon lequel les classes doivent être extensibles, mais non modifiables ("SOLID").

Comme on peut ajouter autant de décorateurs que l'on veut sur un objet, on peut se servir de ce principe pour combiner des effets.   

### 3.3 Le State
Le State est un design pattern qui permet de modifier le comportement d'un objet selon un état interne qu'il lui a été défini, on symbolise une sorte de changement de classe.
### 3.3.1 Faiblesses State
Peu utile dans le cas ou il n'y a que peu d'états différents ou de transition à effectuer.
### 3.3.2 Forces State
Le code est lié aux différents états dans des classes uniques et séparées, donc plusieurs programmeurs peuvent créer leurs classes pouvant fonctionner sur le même objet.

Il est possible de facilement ajouter de nouveaux états sans modifier les anciens ni modifier le contexte.

L'organisation du code liée aux différents états se fait dans des classes séparées, ce qui permet d'éviter d'énormes <i>switch</i> ou suite de <i>if</i>.

## 4. Conclusion
Pour conclure, notre projet utilise les différents patterns de manière groupés. Ils ne sont pas utilisés à leur maximum, car pour le State il est très simplifié et suit des changements d'état linéaire et ne change que très peu d'un état à l'autre.</br>
Le décorateur a été revu en cours de projet, car une approche assez naïve de créer une classe par décorateur a été fait, alors que dans ce cas la il est possible de passer le char au constructeur de la classe.</br>
Le composite comme pour les fractales est bien utilisé, car il permet de facilement créer les hiérarchies de classes.
## 5. Sources

Pour les points forts et faibles du Composite:
Refactoring.Guru., 2022, Composite [en ligne], Date inconnue [consulté le 30 mars 2022]. Disponible à l'adresse :
https://refactoring.guru/fr/design-patterns/composite

Pour les points forts et faibles du Decorator:
Refactoring.Guru., 2022, Décorateur [en ligne], Date inconnue [consulté le 26 avril 2022]. Disponible à l'adresse :
https://refactoring.guru/fr/design-patterns/decorator

codeproject.com, 2022, Decorator Design Pattern in Java [en ligne], 11 février 2013, [consulté le 26 avril 2022]. Disponible à l'adresse :
https://www.codeproject.com/Tips/468951/Decorator-Design-Pattern-in-Java

dzone.com, 2022, Is Inheritance Dead? A Detailed Look Into the Decorator Pattern [en ligne], 17 septembre 2019 [en ligne], [Consulté le 26 avril 2022]. Disponible à l'adresse :
https://dzone.com/articles/is-inheritance-dead
_____________________

### Option : Questions
-
-
-


