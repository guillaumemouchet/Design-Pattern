#pragma once

#include <iostream>

#include "DecorateurComposantPanier.h"

using namespace std;

class DecorateurComposantPanierEgal : public DecorateurComposantPanier
{
public:
    DecorateurComposantPanierEgal(ComposantPanier * composant) : DecorateurComposantPanier() {
        this->composant = composant;
    }

    void AfficherFruits() override {
        cout << "================" << endl;
        this->composant->AfficherFruits();
        cout << "================" << endl;
    }
};