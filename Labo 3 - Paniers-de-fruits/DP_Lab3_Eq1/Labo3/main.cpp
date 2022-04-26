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
    Panier * panierRacine = new Panier();

    Fruit * banane = new Fruit("Banane", false);

    Panier * panier1 = new Panier();

    Fruit * fraise = new Fruit("Fraise", false);
    Fruit * avocat = new Fruit("Avocat", true);

    panier1->AjouterComposant(fraise);
    panier1->AjouterComposant(avocat);

    panierRacine->AjouterComposant(banane);
    panierRacine->AjouterComposant(panier1);

    panierRacine->AfficherFruits();

    cout << endl << boolalpha << "Avec ou sans pépin ? " << panierRacine->AvecOuSansPepin() << endl;
    return 0;
}