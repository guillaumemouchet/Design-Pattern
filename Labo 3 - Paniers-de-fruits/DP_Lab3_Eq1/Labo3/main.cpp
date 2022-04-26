/*
* Design Pattern
* Laboratoire n°3 : Paniers-de-fruits
* Équipe 1 : Aubert Nicolas, Besia Alexandre, Mouchet Guillaume - ISC2il-b
* Avril 2022
*/

#include "panier.h"
#include "fruit.h"

int main(int argc, char const *argv[])
{
    Panier * panier = new Panier();

    Fruit * banane = new Fruit("Banane", false);

    panier->AjouterComposant(banane);

    panier->AfficherFruits();

    cout << boolalpha << panier->AvecOuSansPepin() << endl;
    return 0;
}