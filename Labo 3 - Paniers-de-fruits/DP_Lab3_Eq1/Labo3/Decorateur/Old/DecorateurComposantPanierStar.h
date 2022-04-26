#pragma once

#include <iostream>

#include "DecorateurComposantPanier.h"

using namespace std;

class DecorateurComposantPanierStar : public DecorateurComposantPanier
{
public:
    DecorateurComposantPanierStar(ComposantPanier * composant) : DecorateurComposantPanier() {
        this->composant = composant;
    }

    void AfficherFruits() override {
        cout << "****************" << endl;
        this->composant->AfficherFruits();
        cout << "****************" << endl;
    }
};