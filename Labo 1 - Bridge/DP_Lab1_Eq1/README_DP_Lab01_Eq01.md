/*-------------<br>
Design Patterns<br>
Labo 01<br>
Equipe 01 : M. Guillaume Mouchet, M. Nicolas Aubert, M. Alexandre Besia<br>
-------------*/

## 1. Structure source
La demande du client est de pouvoir dessiner des formes avec plusieurs API différentes, qui diffèrent sur leur manière d'appeler les méthodes de dessins. Par exemple : l'API1 utilise draw_a_line(x1, y1, x2, y2) alors que l'API2 utilise drawMyLine(x1, x2, y1, y2). <br>
Le client veut aussi la possibilité de pouvoir dessiner 3 formes différentes : des cercles, des rectangles (avec un angle d'inclinaison) et des hexagones.

La première approche de ce problème a été sans Design Pattern et était une implémentation naïve et fastidieuse: car elle consiste à créer 2 versions de Shape qui utiliseront chacune leur API respective, ensuite il faudra implémenter chacune des formes suivant l'API.

## 2. Amélioration possibles
Le problème de la structure de base de ce projet est qu'il y a beaucoup trop de classes et d'héritage. On remarque très rapidement que toutes les classes V1 et V2 se ressemblent, et sont un copier coller les unes des autres. Cela n'est pas une bonne optimisation de code et rend le travail fastidieux pour le programmeur, et augmente également le risque d'erreur.<br>
Afin d'améliorer l'architecture du projet, nous pouvons passer par un Bridge. Celui-ci permet de réduire grandement le nombre de classe nécessaire et faire des compositions plus concrètes.<br>
(Exemple : c'est dans une classe dessin qu'on décide l'API et pas directement dans chaque Shape. Les objets de type <i>Shape</i> prendront en attribut l'API qu'ils devront utiliser). <br>

## 3. Le DP
Le Design Pattern qui est utilisé est le Bridge, il permet de remplacer les nombreuses spécialisations par des compositions et agrégations, ce qui permet de diminuer le nombre de classes et de copier/coller inutiles. 
Les classes des formes (Circle, Rectangle, Hexagone) sont des classes concrètes utilisant la méthode draw(). Ces classes sont des classes d'abstraction concrètes de la classe Shape qui est abstraite. <br>
La classe Drawing est une classe d'implémentation qui permet d'utiliser les deux différentes API. 

### 3.1 Faiblesses
Utile que pour des très grand projet, il est aussi important de noter qu'il faut passer plus de choses aux constructeurs : dans notre cas, nous devons donner l'API de dessin que nous voulons utiliser lors de la création d'une forme (Shape).<br>
Dans le cas d'un petit projet, faire plein de classes abstraites n'est pas nécessaire, car cela rajoute des intermédiaires de classes dans lesquelles il n'y a quasiment rien.

### 3.2 Forces
Ce Design Pattern permet d'éviter les répétitions de classes semblables. Par exemple si on a 4 API différentes pour dessiner, on pourrait partir rapidement sur une spécialisation du style:
- CarreAPI1, CarreAPI2, CarreAPI3 etc. <br>

Ce qui est lourd à faire pour le programmeur, car plus le client demande d'ajouter des formes ou des APIs, plus le nombre de classes augmente (nbShape*nbApi), contrairement à l'approche du bridge, qui fait que le nombre de classes est plus proche de (nbShape + nbAPI). <br>
En utilisant les puissances du langage, on peut profiter des compositions et des agrégations, ce qui sépare complétement les formes des APIs, mais ne les empêche pas de communiquer ensemble.


## 4. Conclusion
Le Bridge permet de facilement modifier et agrandir un projet (Suite aux demandes du clients qui veut plus de formes ou différents moyens de les dessiner). On minimise le plus possible le nombre de ficher à créer pour chaque API et pour chaque forme, on minimise aussi le travail inutile de copier/coller et cela réduit aussi le nombre de bug. (garder les mauvais noms de classes, les mauvais includes etc.).


## 5. Sources
Le fonctionnement de création d'un hexagone à été inspiré du site: (https://www.codeproject.com/Articles/14948/Hexagonal-grid-for-games-and-other-projects-Part-1)<br>
Pour ce qui est du reste, cela vient de nos réflexions, et une utilisation réfléchie de nos cours de trigonométrie et de géometrie.

_____________________

### Option : Questions
-
-
-
