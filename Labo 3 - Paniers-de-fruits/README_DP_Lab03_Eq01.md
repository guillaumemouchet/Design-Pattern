/*-------------<br>
Design Patterns<br>
Labo 03<br>
Equipe 01 : M. Guillaume Mouchet, M. Nicolas Aubert, M. Alexandre Besia<br>
-------------*/

## 1. Structure source
Le but de ce projet est de créer trois design pattern différents, le composite, le state et le decorator, puis de les mettres ensemble pour les utiliser sur un panier de fruits et simuler une commande d'un panier de fruit puis de son affichage suivant les envies de l'utilisateur.
## 2. Amélioration possibles
Une amélioration possible de notre programme est sur l'affichage en passant une profondeur aux fruits et paniers pour faire une indentation plus représentative.
## 3. Les DPs

### 3.1 Le composite
Le composite est un desgin pattern qui permet une conceptualisation structurelle de nos classes. Il permet d'agencer des objets dans une arboresence, ou chaque objet est contenu et peut être aussi contenant.

### 3.1.1 Faiblesses composite

Il ne s'applique qu'à des cas très spécifiques. Il peut être difficile de trouver une interface commune à plusieurs classes dans un projet, car les fonctionnalités sont trop différentes. Ce qui aboutit à une interface Component trop générique et plus difficile à comprendre.

### 3.1.2 Forces composite

Il facilite le travail dans les structures arborescentes complexes, car il utilise de manière optimisée les avantages du polymorphisme et de la résursivité.

Principe ouvert/fermé. Il permet d'introduire facilement des nouveaux types d’éléments dans l'arboresence, sans avoir à réécrire la classe dans laquelle il existe. [refactoring.guru 2022]

### 3.2 Le decorator

Le decorator est un design pattern qui permet d'éviter l'acumulation de sous-classes qui font toutes presques la même chose. 

Par exemple si on fait un programme qui créer un café starbucks, et qu'on peut avoir entre 1 et 4 suppléments, il faudrait créer des dizaines de classes pour chaque combinaison possible. À la place de faire ça, on peut ajouter les suppléments à l'exécution (et non à la compilation), on créer des "embaleurs" qui implémentent les différents suppléments de notre café et on place l'objet café dans ces embaleurs à l'exécution.

### 3.2.1 Faiblesses decorator

Quand on commence à avoir beaucoup de décorateur, ça devient difficile de maintenir le code car ils se ressemblent tous énormément au niveau du code.

Si l'interface Decorator a plein de méthode, tous les décorateur doivent implémenter toutes ces méthodes. Contrairement à l'héritage où les enfants peuvent reprendre les méthodes de la classe parente sans les redéfinir.

Retirer un décorateur spécifique de la pile est compliqué.

### 3.2.2 Forces decorator

Il est très facile d'ajoute un nouveau supplément, une fois la structure principale en place il n'y a aucune adaptation à faire. 

Les différents décorateurs peuvent être ajouté dans n'importe quel ordre et en quantité illimité. Les décorateurs appuient bien le principe selon lequel les classes doivent être extensibles mais non modifiables ("SOLID").

Comme on peut ajouter autant de décorateur que l'on veut sur un objet, on peut se servir de ce principe pour combiner des effets.   

### 3.3 Le state
Le state est un design pattern qui permet de modifier le comportement d'un objet selon un état interne qu'il lui à été défini, on symbolise une sorte de changement de classe.
### 3.3.1 Faiblesses state
Peu utile dans le cas ou il n'y a que peu d'états différents ou de transition à effectuer.
### 3.3.2 Forces state
Le code est lié aux différents états dans des classes uniques et séparées, donc plusieurs programmeur peuvent créer leur classes pour fonctionner sur le même objet.
Il est possible de facilement ajouter des nouveaux états sans modifier les anciennes ni modifier le contexte.
L'organisation du code lié aux différents états se fait dans des classes séparés, ce qui permet d'éviter d'énormes <i>switch</i> ou suite de <i>if</i>.

## 4. Conclusion
//TODO
## 5. Sources

Pour les points forts et faibles du Composite:
Refactoring.Guru., 2022, Composite [en ligne], Date inconnue, [Consulté le 30 mars 2022]. Disponible à l'adresse :
https://refactoring.guru/fr/design-patterns/composite

Pour les points forts et faibles du Decorator:
Refactoring.Guru., 2022, Décorateur [en ligne], Date inconnue, [Consulté le 26 avril 2022]. Disponible à l'adresse :
https://refactoring.guru/fr/design-patterns/decorator

codeproject.com, 2022, Decorator Design Pattern in Java [en ligne], 11 février 2013, [Consulté le 26 avril 2022]. Disponible à l'adresse :
https://www.codeproject.com/Tips/468951/Decorator-Design-Pattern-in-Java

dzone.com, 2022, Is Inheritance Dead? A Detailed Look Into the Decorator Pattern [en ligne], 17 septembre 2019 [en ligne], [Consulté le 26 avril 2022]. Disponible à l'adresse :
https://dzone.com/articles/is-inheritance-dead
_____________________

### Option : Questions
-
-
-
