#pragma once

#include <list>
#include <iostream>

#include "composantPanier.h"

using namespace std;

class Panier : public ComposantPanier
{
protected:
    list<ComposantPanier *> enfants;

public:
    Panier() : ComposantPanier() { }
    ~Panier() { }

    void AjouterComposant(ComposantPanier * composant) override {
        this->enfants.push_back(composant);
    }
    
    void SupprimerComposant(ComposantPanier * composant) override {
        this->enfants.remove(composant);
    }

    void AfficherFruits() override {
        cout << "Panier[" << endl;

        for (ComposantPanier * enfant : enfants) {
            enfant->AfficherFruits();
            if(enfants.back() != enfant) cout << ", " << endl;
        }

        cout << "]" << endl;
    }

    bool AvecOuSansPepin() override
    {
        for (ComposantPanier * enfant : enfants) {
            if(enfant->AvecOuSansPepin()) return true;
        }

        return false;
    }
};