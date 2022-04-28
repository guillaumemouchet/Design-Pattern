/*
 * Design Pattern
 * Laboratoire n°3 : Paniers-de-fruits
 * Équipe 1 : Aubert Nicolas, Besia Alexandre, Mouchet Guillaume - ISC2il-b
 * Avril 2022
 */

#include "Composite/panier.h"
#include "Composite/fruit.h"

#include "Decorateur/DecorateurComposantPanierPrinting.h"

#include "State/Commande.hpp"
#include "State/Paid.hpp"
#include "State/Sent.hpp"
#include "State/Waiting.hpp"

char chooseDecorator();


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
int main(int argc, char const *argv[])
{
    
    cout << "Cette courte application montre le fonctionnement d'une commande d'un panier de fruits préfait, puis de son affichage à l'aide d'un décorateur." << endl << endl;
    
    //Création de la commande du panier de fruits
    Commande *context = new Commande(new Waiting());

    // Saisie utilisateur pour le choix du caractère de décoration
    char decoChar = chooseDecorator();;

    // Création des composants panier à l'aide du décorateur
    DecorateurComposantPanierPrinting *panierRacine = new DecorateurComposantPanierPrinting(new Panier(), decoChar);
    DecorateurComposantPanierPrinting *banane = new DecorateurComposantPanierPrinting(new Fruit("Banane", false), decoChar);
    DecorateurComposantPanierPrinting *panier1 = new DecorateurComposantPanierPrinting(new Panier(), decoChar);
    DecorateurComposantPanierPrinting *fraise = new DecorateurComposantPanierPrinting(new Fruit("Fraise", false), decoChar);
    DecorateurComposantPanierPrinting *avocat = new DecorateurComposantPanierPrinting(new Fruit("Avocat", true), decoChar);

    panier1->AjouterComposant(fraise);
    panier1->AjouterComposant(avocat);

    panierRacine->AjouterComposant(banane);
    panierRacine->AjouterComposant(panier1);

    //Traitement de la commande
    while (!context->finished)
    {
        context->TraiterCommande();
    }
    cout << endl << endl;

    // Afficher le panier
    panierRacine->AfficherFruits();

    cout << endl
         << boolalpha << "Avec ou sans pépin ? " << panierRacine->AvecOuSansPepin() << endl;

    // Supprimer les pointeurs
    delete panierRacine;
    delete context;

    return 0;
}

char chooseDecorator()
{   
    char decoChar;
    int status = 0;
    int action = -1;
    do
    {
        cout << "======================================= " << endl;
        cout << "Veuillez selectionner votre décorateur" << endl;
        cout << "[0] =" << endl;
        cout << "[1] #" << endl;
        cout << "[2] *" << endl;
        cout << "[3] None" << endl;
        cout << "======================================= " << endl;

        fflush(stdin);
        status = scanf("%d", &action);
        cout << endl;

    } while (!(0 <= action && action <= 3 && status == 1));

    switch (action)
    {
    case 0: 
        decoChar = '=';
        break;
    case 1: 
        decoChar = '#';
        break;
    case 2: 
        decoChar = '*';
        break;

    default:
        decoChar = ' ';
        break;
    }
    return decoChar;
}