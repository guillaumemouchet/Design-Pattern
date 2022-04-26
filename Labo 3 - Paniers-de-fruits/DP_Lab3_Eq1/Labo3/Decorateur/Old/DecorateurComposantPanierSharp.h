#pragma once

#include <iostream>

#include "DecorateurComposantPanier.h"

using namespace std;

class DecorateurComposantPanierSharp : public DecorateurComposantPanier
{
public:
    DecorateurComposantPanierSharp(ComposantPanier * composant) : DecorateurComposantPanier() {
        this->composant = composant;
    }

    void AfficherFruits() override {
        cout << "################" << endl;
        this->composant->AfficherFruits();
        cout << "################" << endl;
    }
};