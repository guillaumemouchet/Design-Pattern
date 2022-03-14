/*-------------<br>
Design Patterns<br>
Labo 01<br>
Equipe 04 : M. Guillaume Mouchet, M. Nicolas Aubert, M. Alexandre Besia<br>
-------------*/

## 1. Structure source
La structure de base vue en cours pour ce projet était sans bridge, en utilisant la spécialisation de classes et les principes de l'héritage.

## 2. Amélioration possibles
Le problème de la structure de base de ce projet est qu'il y a beaucoup trop de classe et d'héritage, on voit que toutes les classes V1 ressemble complétement aux V2, et niveau optimisation de code et de temps de travail c'est pas pratique.<br>
C'est pour ça qu'avec un Bridge on peut réduire grandement le nombre de classe nécessaire et faire des compositions plus concrètes.<br>
(Exemple : c'est dans une classe dessin qu'on décide l'API et pas directement dans chaque shape, les objets de type <i>Shape</i> prendront en attribut l'API qu'ils devront utiliser).

## 3. Le DP
Le Design Pattern qui est utilisé est le Bridge, il permet de remplacer les nombreuses spécialisations par des compositions et agrégations, ce qui permet de diminuer le nombre de classes et de copier/coller inutiles. 
 

### 3.1 Faiblesses
Utile que pour des très grand projet, il est aussi important de noter qu'il faut passer plus de choses aux constructeurs : dans notre cas, nous devons donner l'API de dessin que nous voulons utiliser.<br>
Dans le cas d'un petit projet, faire plein de classes abstraites n'est pas nécessaire, car cela rajoute des intermédiaires de classes dans lesquelles il n'y a quasiment rien.

### 3.2 Forces
Ce Design Pattern permet d'éviter les répétitions de classes semblables. Par exemple si on a 4 API différentes pour dessiner, on pourrait partir rapidement sur une spécialisation du style:
- CarreAPI1, CarreAP2, CarreAp3 etc. <br>

ce qui est lourd à faire pour le programmeur, car plus le client demande d'ajouter des formes ou des APIs, plus le nombre de classes augmente (nbShape*nbApi), contrairement à l'approche du bridge, qui fait que le nombre de classes est plus proche de (nbShape + nbAPI). <br>
En utilisant les puissances du langage, on peut profiter des compositions et des agrégations, ce qui sépare complétement les formes des APIs, mais ne les empêche pas de communiquer ensemble.


## 4. Conclusion
Le Bridge permet de facilement modifier et agrandir un projet (Suite aux demandes du clients qui veut plus de formes ou différents moyens de les dessiner). On minimise le plus possible le nombre de ficher à créer pour chaque API et pour chaque forme, on minimise aussi le travail inutile de copier/coller et cela réduit aussi le nombre de bug. (garder les mauvais noms de classes, les mauvais includes etc.).


## 5. Sources
Le fonctionnement de création d'un hexagon à été inspiré du site: (https://www.codeproject.com/Articles/14948/Hexagonal-grid-for-games-and-other-projects-Part-1)<br>
Pour ce qui est du reste cela vient de nos réflexions, et une utilisation réfléchie de nos cours de trigonométrie et de géometrie.

_____________________

### Option : Questions
-
-
-
