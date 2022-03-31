/*-------------<br>
Design Patterns<br>
Labo 02<br>
Equipe 01 : M. Guillaume Mouchet, M. Nicolas Aubert, M. Alexandre Besia<br>
-------------*/

## 1. Structure source
La demande pour cet exercice est de créer des fractales. Nous sommes partis sur l'idée de faire des fractacles chaotiques, ou les angles et le nombre d'enfants seraient aléatoires. Nous avons aussi utilisé le bruit (Perlin noise) pour faire bouger aléatoirement nos fractales, afin de donner une impression de vie.
Le résultat final est trois fractales ressemblant à des algues de couleurs différentes, flottantent au fond de l'océan, perturbées par un courant marin (simulé par le bruit).
Les contraintes pour ce Laboratoire sont d'utiliser les Design Pattern suivant:

 * Singleton
 * Composite
 

Le Singleton permet d'instancier de façon unique la classe "Drawer". Celle-ci permet de dessiner un cercle ou une ligne suivant une coordonnée et une couleur.
Chacune des branches nos algues (arbres) utilisent cette classe pour se dessiner elle-mêmes, et utilisent donc la même instance de dessin.

Nous avons utilisé le Composite pour faire les branches et les feuilles des fractales.<br>
D'une classe "Component" abstraite sont dérivées deux classes filles, "Branch" et "Leaf" qui doivent toutes deux implémenter les méthodes de <i>draw()</i> et <i>update()</i>.

Chacune des branches s'occupe de créer ses enfants (lors de sa construction). Le nombre d'enfant est aléatoire, la valeur d'enfants maximale est choisie par l'utilisateur.
Si aucune branche n'est créée, ou que la profondeur maximale est atteinte (également déterminée par l'utilisateur), une feuille est créée (symbolisée par les ronds).


## 2. Amélioration possibles


## 3. Le DP

### 3.1 Faiblesses


### 3.2 Forces



## 4. Conclusion
Dans votre rapport vous devez montrer clairement l’utilité des deux patterns!!

Le composite permet de fare un meilleur héritage à plusieurs niveaux.
Si nous prenons la création d'un arbre, il pourrait être fait avec plusieurs classes différentes pour symbolyser différents type de branche suivant leur niveaux jusqu'à atteindre les feuilles mais ce qui ferait un travail fastidieux de créer chaque classes "Branche", "SousBranche", "SousSousBranche" etc et ne permetterait pas de changer facilement le nombre de niveaux de l'arbre.
Avec le Composite, qui permet de faire des enfants de sa propre classe, il est facile de crée un arbre avec peu de classe car la récursivité fait que chaque fils est de la même classe parente, d'un Component on peut créer soit une Leaf, soit une Branche.

Le Singleton permet de faire de l'économie de mémoire, dans notre cas au lieu de recréer une instance de dessin à chaque endroit ou elle doit être utilisée (et donc de devoir la détruire), on utilise une instance qui à été faite dans la classe Mère Component qui est abstraite. Chaque enfant voudra créer une nouvelle instance de Drawer (vu que c'est dans le constructeur de la classe mère), mais ils ne pourront pas et utiliseront celle déjà créée grâce au Singleton.
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
