/*
* Design Pattern
* Laboratoire n°3 : Paniers-de-fruits
* Équipe 1 : Aubert Nicolas, Besia Alexandre, Mouchet Guillaume - ISC2il-b
* Avril 2022
*/

#include "panier.h"
#include "fruit.h"
#include "DecorateurComposantPanierEgal.h"
#include "DecorateurComposantPanierStar.h"
#include "DecorateurComposantPanierSharp.h"

#include "DecorateurComposantPanierPrinting.h"

#include "Commande.hpp"
#include "Paid.hpp"
#include "Sent.hpp"
#include "Waiting.hpp"

int main(int argc, char const *argv[])
{
    Commande * context = new Commande(new Waiting());

    // Saisie utilisateur pour le choix du caractère de décoration
    char decoChar;
    cout << "Choix du décorateur (=, #, *, ...) : ";
    cin >> decoChar;
    cout << endl;    


    // Structure du panier
    /*
        Panier [
            Banane,
            Panier [
                Fraise,
                Avocat
            ]
        ]
    */

    // Création des composants panier
    DecorateurComposantPanierPrinting * panierRacine = new DecorateurComposantPanierPrinting(new Panier(), decoChar);
    DecorateurComposantPanierPrinting * banane = new DecorateurComposantPanierPrinting(new Fruit("Banane", false), decoChar);
    DecorateurComposantPanierPrinting * panier1 = new DecorateurComposantPanierPrinting(new Panier(), decoChar);
    DecorateurComposantPanierPrinting * fraise = new DecorateurComposantPanierPrinting(new Fruit("Fraise", false), decoChar);
    DecorateurComposantPanierPrinting * avocat = new DecorateurComposantPanierPrinting(new Fruit("Avocat", true), decoChar);

    panier1->AjouterComposant(fraise);
    panier1->AjouterComposant(avocat);

    panierRacine->AjouterComposant(banane);
    panierRacine->AjouterComposant(panier1);

    while (!context->finished)
    {
        context->TraiterCommande();
    }

    // Afficher le panier
    panierRacine->AfficherFruits();
    cout << endl << boolalpha << "Avec ou sans pépin ? " << panierRacine->AvecOuSansPepin() << endl;

    // Supprimer les pointeurs
    delete panierRacine;
    delete context;

    return 0;
}