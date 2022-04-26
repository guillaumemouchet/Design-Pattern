/*-------------<br>
Design Patterns<br>
Labo 03<br>
Equipe 01 : M. Nicolas Aubert, M. Alexandre Besia, M. Guillaume Mouchet<br>
-------------*/

## 1. Structure source

## 2. Améliorations possibles

## 3. Les DPs
### 3.1 State

#### 3.1.1 Faiblesses du State
- Pas pratique si nous n'avons que de très peu d'états ou peu de transitions.

#### 3.1.2 Forces du State
- L'organisation du code lié aux différents états se fait dans des classes séparés, ce qui permet d'éviter d'énormes <i>switch</i> ou suite de <i>if</i>.
- L'ajout de nouveaux états peut se faire sans modifier les états ou le contexte existants.

### 3.2 Composite
Le composite est un desgin pattern qui permet une conceptualisation structurelle de nos classes. Il permet d'agencer des objets dans une arboresence, ou chaque objet est contenu et peut être aussi contenant.
#### 3.2.1 Faiblesses Composite
Il ne s'applique qu'à des cas très spécifiques. Il peut être difficile de trouver une interface commune à plusieurs classes dans un projet, car les fonctionnalités sont trop différentes. Ce qui aboutit à une interface <i>Component</i> trop générique et plus difficile à comprendre.

#### 3.2.2 Forces Composite
Il facilite le travail dans les structures arborescentes complexes, car il utilise de manière optimisée les avantages du polymorphisme et de la résursivité.
Principe ouvert/fermé. Il permet d'introduire facilement des nouveaux types d’éléments dans l'arboresence, sans avoir à réécrire la classe dans laquelle il existe. [refactoring.guru 2022]

## 4. Conclusion

## 5. Sources

### Option : Questions
-
-
-
